// src/routes/cuts.js
const express = require('express');
const router = express.Router();
const cutsController = require('../controllers/cutsController');

router.get('/cuts', cutsController.getCuts);
router.post('/cuts', cutsController.addCut);
router.put('/cuts/:id', cutsController.updateCut);
router.delete('/cuts/:id', cutsController.deleteCut);

module.exports = router;
