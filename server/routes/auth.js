import express from 'express';
import crypto from 'crypto';
import AdminUser from '../models/AdminUser.js';
import { getIsConnected } from '../config/db.js';
import { SEED_DATA } from '../seed.js';

const router = express.Router();

// Active admin sessions map: token -> { user, expiresAt }
const activeSessions = new Map();

// Helper to generate auth token
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Middleware to verify admin authentication
export function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Admin authentication token required.' });
  }

  const token = authHeader.split(' ')[1];
  const session = activeSessions.get(token);

  if (!session || session.expiresAt < Date.now()) {
    if (session) activeSessions.delete(token);
    return res.status(401).json({ success: false, message: 'Session expired. Please log in again.' });
  }

  req.adminUser = session.user;
  next();
}

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const cleanEmail = email.toLowerCase().trim();
    let userRecord = null;

    if (getIsConnected()) {
      userRecord = await AdminUser.findOne({ email: cleanEmail });
      
      // If user not in DB yet, check if matching default seed credentials and create
      if (!userRecord && cleanEmail === SEED_DATA.superAdmin.email.toLowerCase() && password === SEED_DATA.superAdmin.password) {
        userRecord = new AdminUser({
          email: SEED_DATA.superAdmin.email,
          name: SEED_DATA.superAdmin.name,
          role: SEED_DATA.superAdmin.role
        });
        userRecord.setPassword(SEED_DATA.superAdmin.password);
        await userRecord.save();
      }
    }

    let isValid = false;
    let userInfo = null;

    if (userRecord) {
      isValid = userRecord.validatePassword(password);
      if (isValid) {
        userRecord.lastLogin = new Date();
        await userRecord.save();
        userInfo = {
          id: userRecord._id,
          email: userRecord.email,
          name: userRecord.name,
          role: userRecord.role,
        };
      }
    } else {
      // In-memory fallback authentication
      if (cleanEmail === SEED_DATA.superAdmin.email.toLowerCase() && password === SEED_DATA.superAdmin.password) {
        isValid = true;
        userInfo = {
          id: 'admin_mem_1',
          email: SEED_DATA.superAdmin.email,
          name: SEED_DATA.superAdmin.name,
          role: 'superadmin'
        };
      }
    }

    if (!isValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials. Please check your email and password.' });
    }

    // Generate 7-day token
    const token = generateToken();
    activeSessions.set(token, {
      user: userInfo,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    });

    return res.json({
      success: true,
      message: 'Logged in successfully as Super Admin.',
      token,
      user: userInfo
    });
  } catch (err) {
    console.error('Auth login error:', err);
    return res.status(500).json({ success: false, message: 'Server error during authentication.', error: err.message });
  }
});

// GET /api/auth/me - Verify session
router.get('/me', requireAdmin, (req, res) => {
  res.json({
    success: true,
    user: req.adminUser
  });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    activeSessions.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully.' });
});

export default router;
export { router };
