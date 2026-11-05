import { getCollection, getDb } from "@/lib/db";
import { Project, Skill, ContactMessage, AdminStats } from "@/types";
import { initialProjects, initialSkills } from "@/lib/seed-data";
import { ObjectId } from "mongodb";

// --- PROJECTS ---

export async function getProjects(): Promise<Project[]> {
  try {
    const col = await getCollection("projects");
    const count = await col.countDocuments();

    if (count === 0) {
      // Seed initial projects
      const docsToInsert = initialProjects.map(({ _id, id, ...rest }) => ({
        ...rest,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      await col.insertMany(docsToInsert as any);
    }

    const docs = await col.find({}).sort({ order: 1, createdAt: -1 }).toArray();
    return docs.map((doc) => {
      const defaults = initialProjects.find((project) => project.slug === doc.slug);
      return {
        ...doc,
        liveUrl: doc.liveUrl || defaults?.liveUrl,
        githubUrl: doc.githubUrl || defaults?.githubUrl,
        _id: doc._id.toString(),
        id: doc._id.toString(),
      };
    }) as unknown as Project[];
  } catch (error) {
    console.error("Error loading projects from DB, using fallback:", error);
    return initialProjects;
  }
}

export async function createProject(data: Omit<Project, "_id" | "id" | "createdAt" | "updatedAt">): Promise<Project> {
  const col = await getCollection("projects");
  const now = new Date();
  const doc = {
    ...data,
    slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    order: Number(data.order) || 99,
    createdAt: now,
    updatedAt: now,
  };
  const result = await col.insertOne(doc);
  return {
    ...doc,
    _id: result.insertedId.toString(),
    id: result.insertedId.toString(),
  } as unknown as Project;
}

export async function updateProject(id: string, data: Partial<Project>): Promise<boolean> {
  const col = await getCollection("projects");
  const { _id, id: pid, ...rest } = data;
  const updateDoc = {
    ...rest,
    updatedAt: new Date(),
  };

  const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { slug: id };
  const res = await col.updateOne(query, { $set: updateDoc });
  return res.matchedCount > 0;
}

export async function deleteProject(id: string): Promise<boolean> {
  const col = await getCollection("projects");
  const query = ObjectId.isValid(id) ? { _id: new ObjectId(id) } : { slug: id };
  const res = await col.deleteOne(query);
  return res.deletedCount > 0;
}

// --- SKILLS ---

export async function getSkills(): Promise<Skill[]> {
  try {
    const col = await getCollection("skills");
    const count = await col.countDocuments();

    if (count === 0) {
      const skillsToInsert = initialSkills.map(({ _id, id, ...rest }) => ({ ...rest }));
      await col.insertMany(skillsToInsert as any);
    }

    const docs = await col.find({}).sort({ order: 1 }).toArray();
    return docs.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
      id: doc._id.toString(),
    })) as unknown as Skill[];
  } catch (error) {
    console.error("Error loading skills from DB, using fallback:", error);
    return initialSkills;
  }
}

// --- CONTACT MESSAGES ---

export async function createContactMessage(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<ContactMessage> {
  const col = await getCollection("contact_messages");
  const now = new Date();
  const doc = {
    ...data,
    read: false,
    replied: false,
    createdAt: now,
  };
  const result = await col.insertOne(doc);
  return {
    ...doc,
    _id: result.insertedId.toString(),
    id: result.insertedId.toString(),
  } as unknown as ContactMessage;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    const col = await getCollection("contact_messages");
    const docs = await col.find({}).sort({ createdAt: -1 }).toArray();
    return docs.map((doc) => ({
      ...doc,
      _id: doc._id.toString(),
      id: doc._id.toString(),
    })) as unknown as ContactMessage[];
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

export async function markMessageRead(id: string, read = true): Promise<boolean> {
  const col = await getCollection("contact_messages");
  if (!ObjectId.isValid(id)) return false;
  const res = await col.updateOne({ _id: new ObjectId(id) }, { $set: { read } });
  return res.matchedCount > 0;
}

export async function deleteContactMessage(id: string): Promise<boolean> {
  const col = await getCollection("contact_messages");
  if (!ObjectId.isValid(id)) return false;
  const res = await col.deleteOne({ _id: new ObjectId(id) });
  return res.deletedCount > 0;
}

// --- ADMIN STATS ---

export async function getAdminStats(): Promise<AdminStats> {
  try {
    const db = await getDb();
    const projectsCol = db.collection("projects");
    const messagesCol = db.collection("contact_messages");
    const usersCol = db.collection("user");
    const skillsCol = db.collection("skills");

    const [totalProjects, totalMessages, unreadMessages, totalUsers, totalSkills] =
      await Promise.all([
        projectsCol.countDocuments().catch(() => initialProjects.length),
        messagesCol.countDocuments().catch(() => 0),
        messagesCol.countDocuments({ read: false }).catch(() => 0),
        usersCol.countDocuments().catch(() => 1),
        skillsCol.countDocuments().catch(() => initialSkills.length),
      ]);

    return {
      totalProjects: totalProjects || initialProjects.length,
      totalMessages,
      unreadMessages,
      totalUsers: Math.max(totalUsers, 1),
      totalSkills: totalSkills || initialSkills.length,
    };
  } catch (error) {
    console.error("Error calculating admin stats:", error);
    return {
      totalProjects: initialProjects.length,
      totalMessages: 0,
      unreadMessages: 0,
      totalUsers: 1,
      totalSkills: initialSkills.length,
    };
  }
}

// --- USERS MANAGEMENT (ADMIN) ---

export async function getAllUsers() {
  try {
    const col = await getCollection("user");
    const docs = await col
      .find({}, { projection: { password: 0 } })
      .sort({ createdAt: -1 })
      .toArray();

    return docs.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name,
      email: doc.email,
      role: doc.role || "user",
      banned: !!doc.banned,
      image: doc.image,
      createdAt: doc.createdAt,
    }));
  } catch (error) {
    console.error("Error getting users:", error);
    return [];
  }
}

export async function updateUserRole(userId: string, role: "admin" | "user"): Promise<boolean> {
  const col = await getCollection("user");
  const query = ObjectId.isValid(userId) ? { _id: new ObjectId(userId) } : { id: userId };
  const res = await col.updateOne(query, { $set: { role, updatedAt: new Date() } });
  return res.matchedCount > 0;
}

export async function toggleUserBan(userId: string, banned: boolean): Promise<boolean> {
  const col = await getCollection("user");
  const query = ObjectId.isValid(userId) ? { _id: new ObjectId(userId) } : { id: userId };
  const res = await col.updateOne(
    query,
    {
      $set: {
        banned,
        banReason: banned ? "Administrative suspension" : null,
        updatedAt: new Date(),
      },
    }
  );
  return res.matchedCount > 0;
}
