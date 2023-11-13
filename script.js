const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá, estudo desenvolvimento front-end!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//

fetch('http://localhost:3000/')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
