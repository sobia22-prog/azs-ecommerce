import mongoose from 'mongoose';

const CaseStudySchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  category: {
    type: String,
    default: 'General Ecommerce',
  },
  region: {
    type: String,
    default: 'GCC & International',
  },
  platforms: {
    type: [String],
    default: []
  },
  image: {
    type: String,
    default: '',
  },
  metrics: {
    salesGrowth: { type: String, default: '' },
    sevenDayRevenue: { type: String, default: '' },
    roas: { type: String, default: '' },
    acos: { type: String, default: '' }
  },
  summary: {
    type: String,
    default: '',
  },
  highlightQuote: {
    type: String,
    default: '',
  },
  featured: {
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

CaseStudySchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('CaseStudy', CaseStudySchema);
