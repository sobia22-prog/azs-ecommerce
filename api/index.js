process.env.VERCEL = '1';
import app from '../server/index.js';
import { connectDB } from '../server/config/db.js';
import { seedDatabase } from '../server/seed.js';

let isInitialized = false;

export default async function handler(req, res) {
  if (!isInitialized) {
    try {
      await Promise.race([
        (async () => {
          await connectDB();
          await seedDatabase();
        })(),
        new Promise((resolve) => setTimeout(resolve, 2000))
      ]);
    } catch (err) {
      console.warn('[Vercel Serverless Init Notice]:', err.message);
    }
    isInitialized = true;
  }

  // Handle request through Express app and wait for response to finish in serverless
  return new Promise((resolve) => {
    res.on('finish', resolve);
    res.on('close', resolve);
    app(req, res);
  });
}
