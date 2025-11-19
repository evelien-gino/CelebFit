// backend/routes/celebrities.js
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// GET /api/celebrities
router.get('/', async (req, res) => {
  const celebs = await Celebrity.find().populate('outfits');
  res.json(celebs);
});

// GET /api/celebrities/:id
router.get('/:id', async (req, res) => {
  const celeb = await Celebrity.findById(req.params.id).populate({ path: 'outfits', populate: 'items' });
  res.json(celeb);
});

// POST /api/celebrities  (simple admin)
router.post('/', async (req, res) => {
  const newCeleb = new Celebrity(req.body);
  await newCeleb.save();
  res.status(201).json(newCeleb);
});

module.exports = router;
