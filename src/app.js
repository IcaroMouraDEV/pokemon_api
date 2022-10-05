const express = require('express');
const pokemonRoute = require('./routes/pokemonRoutes');
const elementRoute = require('./routes/elementRoutes');

const app = express();

app.use(express.json());
app.use('/pokemon', pokemonRoute);
app.use('/element', elementRoute);

module.exports = app;
