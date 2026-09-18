import mongoose from 'mongoose';
import dns from 'dns';

let isConnected = false;
export const fallbackMemoryStore = {
  leads: [],
  caseStudies: []
};

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/azs_ecommerce';

  // Configure public DNS resolvers for Atlas SRV lookups on Windows
  if (mongoURI.includes('+srv')) {
    try {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
    } catch (e) {
      console.warn('[MongoDB DNS Notice] Could not set custom DNS servers:', e.message);
    }
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000,
    });
    isConnected = true;
    console.log(`[MongoDB Atlas] Connected successfully to host: ${conn.connection.host} (DB: ${conn.connection.name})`);
  } catch (err) {
    isConnected = false;
    console.warn(`[MongoDB Notice] Live MongoDB connection could not be established (${err.message}). Activating built-in resilient In-Memory Collection Engine for lead capture and API state.`);
  }
};

export const getIsConnected = () => isConnected;

export default {
  connectDB,
  getIsConnected,
  fallbackMemoryStore
};
