import { NextRequest, NextResponse } from "next/server";
import { getProjects, createProject } from "@/lib/data-service";
import { getServerSession, isUserAdmin } from "@/lib/auth-helpers";
import { z } from "zod";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

const projectSchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z.string().optional(),
  tagline: z.string().min(5, "Tagline is required"),
  description: z.string().min(10, "Description is required"),
  category: z.enum(["Full-Stack", "Frontend", "Backend", "Mobile", "Other"]).default("Full-Stack"),
  tags: z.union([z.array(z.string()), z.string()]).transform((val) => {
    if (Array.isArray(val)) return val;
    return val.split(",").map((s) => s.trim()).filter(Boolean);
  }),
  liveUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  featured: z.boolean().default(false),
  order: z.number().default(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session || !isUserAdmin(session.user)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Admin privileges required" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const parsed = projectSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message },
        { status: 400 }
      );
    }

    const created = await createProject(parsed.data as any);
    return NextResponse.json(
      { success: true, project: created, message: "Project created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create project" },
      { status: 500 }
    );
  }
}
