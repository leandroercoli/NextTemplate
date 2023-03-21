import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error("Add Mongo URI to .env.local");
  }

  const client = new MongoClient(MONGODB_URI);

  return client.connect();
}
