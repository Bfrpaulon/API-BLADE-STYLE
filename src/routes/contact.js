// src/routes/contact.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contacts', contactController.getContacts);
router.post('/contacts', contactController.addContact);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
