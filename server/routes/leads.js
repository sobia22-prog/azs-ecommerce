const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const { getIsConnected, fallbackMemoryStore } = require('../config/db');
const { requireAdmin } = require('./auth');

// POST /api/leads - Create new lead / discovery booking (Public)
router.post('/', async (req, res) => {
  try {
    const { name, email, website, phone, revenueTier, primaryChannel, targetMarkets } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required fields.'
      });
    }

    const leadData = {
      name,
      email,
      website: website || '',
      phone: phone || '',
      revenueTier: revenueTier || '$25,000 – $100,000 / mo',
      primaryChannel: primaryChannel || 'Omnichannel Expansion (All)',
      targetMarkets: targetMarkets || ['GCC', 'Global'],
      createdAt: new Date(),
      status: 'New'
    };

    let savedLead;

    if (getIsConnected()) {
      savedLead = await Lead.create(leadData);
    } else {
      // In-Memory fallback store
      savedLead = {
        _id: 'lead_' + Date.now(),
        ...leadData
      };
      fallbackMemoryStore.leads.unshift(savedLead);
    }

    return res.status(201).json({
      success: true,
      message: 'Growth strategy consultation booked successfully.',
      lead: savedLead
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your booking.',
      error: error.message
    });
  }
});

// GET /api/leads - Retrieve leads (Admin or overview)
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      const leads = await Lead.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: leads.length, data: leads });
    } else {
      return res.json({
        success: true,
        count: fallbackMemoryStore.leads.length,
        data: fallbackMemoryStore.leads
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// PUT /api/leads/:id - Update lead status (Admin only)
router.put('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getIsConnected()) {
      const lead = await Lead.findById(id);
      if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });
      if (status) lead.status = status;
      await lead.save();
      return res.json({ success: true, message: 'Lead status updated.', data: lead });
    } else {
      const lead = fallbackMemoryStore.leads.find(l => l._id === id);
      if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' });
      if (status) lead.status = status;
      return res.json({ success: true, message: 'Lead status updated.', data: lead });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE /api/leads/:id - Delete lead (Admin only)
router.delete('/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    if (getIsConnected()) {
      await Lead.findByIdAndDelete(id);
    } else {
      fallbackMemoryStore.leads = fallbackMemoryStore.leads.filter(l => l._id !== id);
    }
    return res.json({ success: true, message: 'Lead deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
