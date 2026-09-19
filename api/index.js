import app from '../server/index.js';
import { connectDB } from '../server/config/db.js';
import { seedDatabase } from '../server/seed.js';

let isInitialized = false;

export default async function handler(req, res) {
  if (!isInitialized) {
    try {
      await connectDB();
      await seedDatabase();
    } catch (err) {
      console.warn('[Vercel Serverless Init Notice]:', err.message);
    }
    isInitialized = true;
  }

  // Handle request through Express app
  return app(req, res);
}
