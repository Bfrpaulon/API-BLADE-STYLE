// src/controllers/reviewsController.js
const Review = require('../models/reviewModel');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addReview = async (req, res) => {
  const { name, comment, rating } = req.body;
  const newReview = new Review({ name, comment, rating });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { name, comment, rating } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(id, { name, comment, rating }, { new: true });
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndRemove(id);
    res.json(deletedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
