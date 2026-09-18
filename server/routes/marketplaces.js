const express = require('express');
const router = express.Router();
const Marketplace = require('../models/Marketplace');
const { getIsConnected } = require('../config/db');
const { SEED_DATA } = require('../seed');
const { requireAdmin } = require('./auth');

// In-memory cache for fallback
let memoryMarketplaces = [...SEED_DATA.marketplaces];

// GET /api/marketplaces - Public
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      let items = await Marketplace.find().sort({ sortOrder: 1 });
      if (items.length === 0) {
        await Marketplace.insertMany(SEED_DATA.marketplaces);
        items = await Marketplace.find().sort({ sortOrder: 1 });
      }
      return res.json({ success: true, count: items.length, data: items });
    } else {
      return res.json({ success: true, count: memoryMarketplaces.length, data: memoryMarketplaces });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message, data: memoryMarketplaces });
  }
});

// POST /api/marketplaces - Admin only
router.post('/', requireAdmin, async (req, res) => {
  try {
    const data = req.body;
    if (!data.name || !data.slug) {
      return res.status(400).json({ success: false, message: 'Name and slug are required.' });
    }

    if (getIsConnected()) {
      const item = await Marketplace.create(data);
      return res.status(201).json({ success: true, data: item });
    } else {
      const item = { _id: 'mkt_' + Date.now(), ...data };
      memoryMarketplaces.push(item);
      return res.status(201).json({ success: true, data: item });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// PUT /api/marketplaces/:id - Admin only
router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (getIsConnected()) {
      // Find by _id or slug
      let item = await Marketplace.findOne({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });
      if (!item) {
        return res.status(404).json({ success: false, message: 'Marketplace platform not found.' });
      }
      Object.assign(item, updates);
      await item.save();
      return res.json({ success: true, message: 'Marketplace updated successfully.', data: item });
    } else {
      const idx = memoryMarketplaces.findIndex(m => m._id === id || m.slug === id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Not found in fallback store.' });
      memoryMarketplaces[idx] = { ...memoryMarketplaces[idx], ...updates };
      return res.json({ success: true, message: 'Marketplace updated.', data: memoryMarketplaces[idx] });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/marketplaces/:id - Admin only
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await Marketplace.findOneAndDelete({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });
    } else {
      memoryMarketplaces = memoryMarketplaces.filter(m => m._id !== id && m.slug !== id);
    }
    return res.json({ success: true, message: 'Marketplace platform deleted.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
