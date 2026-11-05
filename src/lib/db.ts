import { MongoClient, Db, Document } from "mongodb";

const uri = process.env.BETTER_AUTH_MONGODB_URL || process.env.MONGODB_URI || "";

if (!uri) {
  console.warn("BETTER_AUTH_MONGODB_URL or MONGODB_URI is not set in environment variables");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClient = client;
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
  client = global._mongoClient!;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export { client, clientPromise };

export async function getDb(dbName = "riyad_dev"): Promise<Db> {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}

export async function getCollection<T extends Document = Document>(collectionName: string) {
  const db = await getDb();
  return db.collection<T>(collectionName);
}
