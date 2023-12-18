// src/controllers/contactController.js
const Contact = require('../models/contactModel');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addContact = async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, { name, email, message }, { new: true });
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findByIdAndRemove(id);
    res.json(deletedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
