import express from 'express';
import CaseStudy from '../models/CaseStudy.js';
import { getIsConnected } from '../config/db.js';
import { SEED_DATA } from '../seed.js';
import { requireAdmin } from './auth.js';

const router = express.Router();

let memoryCaseStudies = [...SEED_DATA.caseStudies];

// GET /api/case-studies - Public
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      let items = await CaseStudy.find().sort({ sortOrder: 1 });
      if (items.length === 0) {
        await CaseStudy.insertMany(SEED_DATA.caseStudies);
        items = await CaseStudy.find().sort({ sortOrder: 1 });
      }
      return res.json({ success: true, count: items.length, data: items });
    } else {
      return res.json({ success: true, count: memoryCaseStudies.length, data: memoryCaseStudies });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message, data: memoryCaseStudies });
  }
});

// POST /api/case-studies - Admin only
router.post('/', requireAdmin, async (req, res) => {
  try {
    const data = req.body;
    if (!data.title || !data.slug) {
      return res.status(400).json({ success: false, message: 'Title and slug are required.' });
    }

    if (getIsConnected()) {
      const item = await CaseStudy.create(data);
      return res.status(201).json({ success: true, data: item });
    } else {
      const item = { _id: 'cs_' + Date.now(), ...data };
      memoryCaseStudies.push(item);
      return res.status(201).json({ success: true, data: item });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// PUT /api/case-studies/:id - Admin only
router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (getIsConnected()) {
      let item = await CaseStudy.findOne({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });
      if (!item) {
        return res.status(404).json({ success: false, message: 'Case study not found.' });
      }
      Object.assign(item, updates);
      await item.save();
      return res.json({ success: true, message: 'Case study updated.', data: item });
    } else {
      const idx = memoryCaseStudies.findIndex(c => c._id === id || c.slug === id);
      if (idx === -1) return res.status(404).json({ success: false, message: 'Not found in fallback store.' });
      memoryCaseStudies[idx] = { ...memoryCaseStudies[idx], ...updates };
      return res.json({ success: true, message: 'Case study updated.', data: memoryCaseStudies[idx] });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/case-studies/:id - Admin only
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await CaseStudy.findOneAndDelete({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });
    } else {
      memoryCaseStudies = memoryCaseStudies.filter(c => c._id !== id && c.slug !== id);
    }
    return res.json({ success: true, message: 'Case study deleted.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
