const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB, getIsConnected } = require('./config/db');
const leadsRoutes = require('./routes/leads');
const caseStudiesRoutes = require('./routes/caseStudies');
const calculatorRoutes = require('./routes/calculator');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the root assets directory
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// API Routes
app.use('/api/leads', leadsRoutes);
app.use('/api/case-studies', caseStudiesRoutes);
app.use('/api/calculator', calculatorRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'AZS Solutions Enterprise Backend',
    database: getIsConnected() ? 'MongoDB Connected' : 'In-Memory Resilient Engine Active',
    uptime: process.uptime()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[AZS Backend] Express API Server running on port ${PORT}`);
});
