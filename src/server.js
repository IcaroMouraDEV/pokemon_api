require('dotenv').config();
const app = require('./app');

const port = 3001;

app.listen(port, () => {
  console.log('PokeApi ta on');
});
