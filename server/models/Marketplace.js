const mongoose = require('mongoose');

const MarketplaceSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: [true, 'Marketplace name is required'],
    trim: true,
  },
  sub: {
    type: String,
    default: '',
  },
  badge: {
    type: String,
    default: 'Official Partner',
  },
  icon: {
    type: String,
    default: '📦',
  },
  desc: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Explore Hub',
  },
  image: {
    type: String,
    default: '',
  },
  metrics: {
    highlight: { type: String, default: '' },
    sub: { type: String, default: '' },
    volume: { type: String, default: '' }
  },
  features: {
    type: [String],
    default: []
  },
  active: {
    type: Boolean,
    default: true,
  },
  sortOrder: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

MarketplaceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Marketplace', MarketplaceSchema);
