import { connectToDatabase } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// This is the API route for getting all users
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Validate the request method
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db("local");

  const allUsers = await db.collection("users").find().toArray();
  res.json({ status: 200, data: allUsers });
}
