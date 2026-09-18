const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB, getIsConnected } = require('./config/db');
const { seedDatabase } = require('./seed');

const authRoutes = require('./routes/auth');
const marketplacesRoutes = require('./routes/marketplaces');
const caseStudiesRoutes = require('./routes/caseStudies');
const blogsRoutes = require('./routes/blogs');
const leadsRoutes = require('./routes/leads');
const calculatorRoutes = require('./routes/calculator');
const uploadRoutes = require('./routes/upload');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database and seed initial collections
connectDB().then(() => {
  seedDatabase();
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static assets from public/assets and assets
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// API Routes
app.use('/api/auth', authRoutes.router);
app.use('/api/upload', uploadRoutes);
app.use('/api/marketplaces', marketplacesRoutes);
app.use('/api/case-studies', caseStudiesRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/calculator', calculatorRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'AZS Solutions Enterprise Backend & Admin Engine',
    database: getIsConnected() ? 'MongoDB Connected' : 'In-Memory Resilient Engine Active',
    uptime: process.uptime()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[AZS Backend] Express API Server running on port ${PORT}`);
});
