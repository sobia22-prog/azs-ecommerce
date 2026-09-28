import mongoose from 'mongoose';
import dns from 'dns';

export const fallbackMemoryStore = {
  leads: [],
  caseStudies: []
};

// Disable mongoose command buffering so queries fail immediately rather than hanging if disconnected
mongoose.set('bufferCommands', false);

let cachedPromise = null;

export const connectDB = async () => {
  // If already connected, return immediately
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (cachedPromise) {
    return cachedPromise;
  }

  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/azs_ecommerce';

  // Only configure custom DNS resolvers for Atlas SRV lookups on local Windows systems.
  // In Linux / AWS Lambda / Vercel, calling dns.setServers breaks DNS resolution.
  if (mongoURI.includes('+srv') && process.platform === 'win32' && !process.env.VERCEL) {
    try {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
    } catch (e) {
      console.warn('[MongoDB DNS Notice] Could not set custom DNS servers:', e.message);
    }
  }

  const timeoutMs = process.env.VERCEL ? 3000 : 8000;

  cachedPromise = (async () => {
    try {
      const conn = await mongoose.connect(mongoURI, {
        serverSelectionTimeoutMS: timeoutMs,
        connectTimeoutMS: timeoutMs,
      });
      console.log(`[MongoDB Atlas] Connected successfully to host: ${conn.connection.host} (DB: ${conn.connection.name})`);
      return conn;
    } catch (err) {
      console.warn(`[MongoDB Notice] Live MongoDB connection could not be established (${err.message}). Activating built-in resilient In-Memory Collection Engine for lead capture and API state.`);
      cachedPromise = null;
      return null;
    }
  })();

  return cachedPromise;
};

export const getIsConnected = () => {
  return Boolean(mongoose.connection && mongoose.connection.readyState === 1);
};

export default {
  connectDB,
  getIsConnected,
  fallbackMemoryStore
};

