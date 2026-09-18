import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  title: {
    type: String,
    required: [true, 'Article title is required'],
    trim: true,
  },
  badge: {
    type: String,
    default: 'Strategic Playbook',
  },
  targetKeyword: {
    type: String,
    default: '',
  },
  targetServiceUrl: {
    type: String,
    default: '/services',
  },
  targetServiceLabel: {
    type: String,
    default: 'Explore Strategy',
  },
  readTime: {
    type: String,
    default: '5 min read',
  },
  date: {
    type: String,
    default: '2026',
  },
  author: {
    type: String,
    default: 'AZS Solutions Research Desk',
  },
  summary: {
    type: String,
    required: [true, 'Summary is required'],
  },
  takeaways: {
    type: [String],
    default: []
  },
  published: {
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

BlogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Blog', BlogSchema);
