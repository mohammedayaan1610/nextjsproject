import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("Error: MONGODB_URI is not set in environment variables.");
  process.exit(1);
}

async function seedUsers() {
  console.log("Fetching users from JSONPlaceholder...");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`Failed to fetch JSONPlaceholder users: ${response.status}`);
  }

  const users = await response.json();
  console.log(`Fetched ${users.length} users.`);

  const client = new MongoClient(uri as string);

  try {
    await client.connect();
    console.log("Connected to MongoDB.");

    const db = client.db("vitatravels");
    const collection = db.collection("users");

    for (const user of users) {
      await collection.updateOne(
        { id: user.id },
        { $set: user },
        { upsert: true }
      );
    }

    console.log("Successfully seeded users into vitatravels.users collection.");
  } catch (error) {
    console.error("Error seeding users:", error);
    process.exitCode = 1;
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB.");
  }
}

seedUsers();
