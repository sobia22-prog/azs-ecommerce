import mongoose from 'mongoose';
import crypto from 'crypto';

const AdminUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    default: 'Super Admin',
    trim: true,
  },
  passwordHash: {
    type: String,
    required: [true, 'Password hash is required'],
  },
  role: {
    type: String,
    enum: ['superadmin', 'admin'],
    default: 'superadmin',
  },
  lastLogin: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Hash password with PBKDF2 salt
AdminUserSchema.methods.setPassword = function (password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  this.passwordHash = `${salt}:${hash}`;
};

// Validate password
AdminUserSchema.methods.validatePassword = function (password) {
  if (!this.passwordHash) return false;
  const parts = this.passwordHash.split(':');
  if (parts.length !== 2) return false;
  const [salt, originalHash] = parts;
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === originalHash;
};

export default mongoose.model('AdminUser', AdminUserSchema);
