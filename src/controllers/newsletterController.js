// src/controllers/newsletterController.js
const Newsletter = require('../models/newsletterModel');

exports.getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.json(newsletters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addNewsletter = async (req, res) => {
  const { email } = req.body;
  const newNewsletter = new Newsletter({ email });

  try {
    const savedNewsletter = await newNewsletter.save();
    res.status(201).json(savedNewsletter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateNewsletter = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(id, { email }, { new: true });
    res.json(updatedNewsletter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteNewsletter = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNewsletter = await Newsletter.findByIdAndRemove(id);
    res.json(deletedNewsletter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
