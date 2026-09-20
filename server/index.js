import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

import { connectDB, getIsConnected } from './config/db.js';
import { seedDatabase } from './seed.js';

import authRoutes from './routes/auth.js';
import marketplacesRoutes from './routes/marketplaces.js';
import caseStudiesRoutes from './routes/caseStudies.js';
import blogsRoutes from './routes/blogs.js';
import leadsRoutes from './routes/leads.js';
import calculatorRoutes from './routes/calculator.js';
import uploadRoutes from './routes/upload.js';
import aiRoutes from './routes/ai.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// API Router mounted at both /api and root to guarantee routing across all Vercel/proxied environments
const apiRouter = express.Router();
apiRouter.use('/auth', authRoutes);
apiRouter.use('/upload', uploadRoutes);
apiRouter.use('/marketplaces', marketplacesRoutes);
apiRouter.use('/case-studies', caseStudiesRoutes);
apiRouter.use('/blogs', blogsRoutes);
apiRouter.use('/leads', leadsRoutes);
apiRouter.use('/calculator', calculatorRoutes);
apiRouter.use('/ai', aiRoutes);

apiRouter.get('/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'AZS Solutions Enterprise Backend & Admin Engine',
    database: getIsConnected() ? 'MongoDB Connected' : 'In-Memory Resilient Engine Active',
    uptime: process.uptime()
  });
});

app.use('/api', apiRouter);
app.use('/', apiRouter);

// Start Server in local Node environments (Vercel sets VERCEL=1)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[AZS Backend] Express API Server running on port ${PORT}`);
  });
}

export default app;
