// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://Bfrpaulon:Bfrp1997!@cluster0.mjqpacl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const cutsRoutes = require('./routes/cuts');
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');
const reviewsRoutes = require('./routes/reviews');

app.use('/cuts', cutsRoutes);
app.use('/contact', contactRoutes);
app.use('/newsletter', newsletterRoutes);
app.use('/reviews', reviewsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
