
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db('startup');
    const collection = database.collection('Project'); 
    const projects = await collection.find({}).toArray();
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return new Response('Error fetching projects', { status: 500 });
  } finally {
    await client.close();
  }
}



