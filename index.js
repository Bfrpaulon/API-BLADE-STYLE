const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Haircut, NewsletterSubscriber, ContactFormEntry } = require('./models/haircut');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('sua_string_de_conexao_mongodb', { useNewUrlParser: true, useUnifiedTopology: true });

// Rotas para Cortes de Cabelo
app.get('/haircuts', async (req, res) => {
  try {
    const haircuts = await Haircut.find();
    res.json(haircuts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.get('/haircuts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const haircut = await Haircut.findById(id);
    res.json(haircut);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.post('/haircuts', async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newHaircut = new Haircut({ name, description, price });
    const savedHaircut = await newHaircut.save();
    res.json(savedHaircut);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.put('/haircuts/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const updatedHaircut = await Haircut.findByIdAndUpdate(id, { name, description, price }, { new: true });
    res.json(updatedHaircut);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.delete('/haircuts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHaircut = await Haircut.findByIdAndDelete(id);
    res.json(deletedHaircut);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Rotas para Newsletter
app.get('/newsletter', async (req, res) => {
  try {
    const subscribers = await NewsletterSubscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.post('/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscriber = new NewsletterSubscriber({ email });
    const savedSubscriber = await newSubscriber.save();
    res.json(savedSubscriber);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.delete('/newsletter/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSubscriber = await NewsletterSubscriber.findByIdAndDelete(id);
    res.json(deletedSubscriber);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Rotas para Formulário de Contato
app.get('/contact', async (req, res) => {
  try {
    const contactEntries = await ContactFormEntry.find();
    res.json(contactEntries);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.get('/contact/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const contactEntry = await ContactFormEntry.findById(id);
    res.json(contactEntry);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newContactEntry = new ContactFormEntry({ name, email, subject, message });
    const savedContactEntry = await newContactEntry.save();
    res.json(savedContactEntry);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.delete('/contact/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContactEntry = await ContactFormEntry.findByIdAndDelete(id);
    res.json(deletedContactEntry);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
