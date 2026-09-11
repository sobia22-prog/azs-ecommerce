const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Work email is required'],
    trim: true,
    lowercase: true,
  },
  website: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  revenueTier: {
    type: String,
    default: '$25,000 – $100,000 / mo',
  },
  primaryChannel: {
    type: String,
    default: 'Omnichannel Expansion (All)',
  },
  targetMarkets: {
    type: [String],
    default: ['GCC', 'UAE', 'Saudi Arabia'],
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Audit Prepared', 'Converted'],
    default: 'New',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Lead', LeadSchema);
