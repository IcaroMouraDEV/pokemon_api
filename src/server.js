require('dotenv').config();
const app = require('./app');

const port = 3002;

app.listen(port, () => {
  console.log('PokeApi ta on');
});
