const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Server running!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.json({name:'This is my name', about:'This is about page'});
});