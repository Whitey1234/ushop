import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "scic-nextjs-project";
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev, use a global variable so the client is not re-created on every reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise.then(client => client.db(dbName));
} else {
  // In prod, just create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then(client => client.db(dbName));
}

export default clientPromise;
