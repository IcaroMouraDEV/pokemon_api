const express = require('express');

const app = express();
const pokemonRoute = require('./routes/pokemonRoute');

app.use(pokemonRoute);

module.exports = app;
