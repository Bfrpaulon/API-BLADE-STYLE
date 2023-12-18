const mongoose = require('mongoose');

const haircutSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const contactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Haircut = mongoose.model('Haircut', haircutSchema);
const NewsletterSubscriber = mongoose.model('NewsletterSubscriber', newsletterSchema);
const ContactFormEntry = mongoose.model('ContactFormEntry', contactFormSchema);

module.exports = {
  Haircut,
  NewsletterSubscriber,
  ContactFormEntry,
};
