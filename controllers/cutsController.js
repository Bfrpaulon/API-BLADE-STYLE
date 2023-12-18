// src/controllers/cutsController.js
const Cut = require('../models/cutModel');

exports.getCuts = async (req, res) => {
  try {
    const cuts = await Cut.find();
    res.json(cuts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCut = async (req, res) => {
  const { name, price, photo } = req.body;
  const newCut = new Cut({ name, price, photo });

  try {
    const savedCut = await newCut.save();
    res.status(201).json(savedCut);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCut = async (req, res) => {
  const { id } = req.params;
  const { name, price, photo } = req.body;

  try {
    const updatedCut = await Cut.findByIdAndUpdate(id, { name, price, photo }, { new: true });
    res.json(updatedCut);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCut = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCut = await Cut.findByIdAndRemove(id);
    res.json(deletedCut);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
