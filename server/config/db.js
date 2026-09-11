const mongoose = require('mongoose');

let isConnected = false;
let fallbackMemoryStore = {
  leads: [],
  caseStudies: []
};

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/azs_ecommerce';

  try {
    // Set 2 second timeout for connection attempt
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2500,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (err) {
    isConnected = false;
    console.warn(`[MongoDB Notice] Live MongoDB instance not active locally (${err.message}). Activating built-in resilient In-Memory Collection Engine for lead capture and API state.`);
  }
};

module.exports = {
  connectDB,
  getIsConnected: () => isConnected,
  fallbackMemoryStore
};
