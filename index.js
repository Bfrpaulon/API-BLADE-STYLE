const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Importe o arquivo swagger.json

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect("mongodb+srv://Bfrpaulon:Bfrp1997!@cluster0.mjqpacl.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão bem-sucedida com o MongoDB');
});

// Rotas
const cutsRoutes = require('./routes/cuts');
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');
const reviewsRoutes = require('./routes/reviews');

app.use('/api', cutsRoutes);
app.use('/api', contactRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', reviewsRoutes);

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo à API do Hair Cut!');
});

// Rota para servir a documentação Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
