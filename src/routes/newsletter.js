// src/routes/newsletter.js
const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

router.get('/newsletters', newsletterController.getNewsletters);
router.post('/newsletters', newsletterController.addNewsletter);
router.put('/newsletters/:id', newsletterController.updateNewsletter);
router.delete('/newsletters/:id', newsletterController.deleteNewsletter);

module.exports = router;
