// src/models/cutModel.js
const mongoose = require('mongoose');

const cutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Cut = mongoose.model('Cut', cutSchema);

module.exports = Cut;
