const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { getIsConnected } = require('../config/db');
const { SEED_DATA } = require('../seed');
const { requireAdmin } = require('./auth');

let memoryBlogs = [...SEED_DATA.blogs];

// GET /api/blogs - Public
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      let items = await Blog.find().sort({ sortOrder: 1 });
      if (items.length === 0) {
        await Blog.insertMany(SEED_DATA.blogs);
        items = await Blog.find().sort({ sortOrder: 1 });
      }
      return res.json({ success: true, count: items.length, data: items });
    } else {
      return res.json({ success: true, count: memoryBlogs.length, data: memoryBlogs });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message, data: memoryBlogs });
  }
});

// POST /api/blogs - Admin only
router.post('/', requireAdmin, async (req, res) => {
  try {
    const data = req.body;
    if (!data.title || !data.slug || !data.summary) {
      return res.status(400).json({ success: false, message: 'Title, slug, and summary are required.' });
    }

    if (getIsConnected()) {
      const item = await Blog.create(data);
      return res.status(201).json({ success: true, data: item });
    } else {
      const item = { _id: 'blog_' + Date.now(), ...data };
      memoryBlogs.push(item);
      return res.status(201).json({ success: true, data: item });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// PUT /api/blogs/:id - Admin only
router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (getIsConnected()) {
      let item = await Blog.findOne({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });
      if (!item) {
        return res.status(404).json({ success: false, message: 'Blog article not found.' });
      }
      Object.assign(item, updates);
      await item.save();
      return res.json({ success: true, message: 'Blog article updated.', data: item });
    } else {
      const idx = memoryBlogs.findIndex(b => b._id === id || b.slug === id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Not found in fallback store.' });
      memoryBlogs[idx] = { ...memoryBlogs[idx], ...updates };
      return res.json({ success: true, message: 'Blog article updated.', data: memoryBlogs[idx] });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/blogs/:id - Admin only
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await Blog.findOneAndDelete({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });
    } else {
      memoryBlogs = memoryBlogs.filter(b => b._id !== id && b.slug !== id);
    }
    return res.json({ success: true, message: 'Blog article deleted.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
