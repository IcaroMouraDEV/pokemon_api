const express = require('express');

const app = express();
const pokemonRoute = require('./routes/pokemonRoute');

app.use('/pokemon', pokemonRoute);

module.exports = app;
