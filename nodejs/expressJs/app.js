const express = require('express');

const app = express();

const root = __dirname;
app.listen(3000);

// console.log(req.url);


app.get('/', (req,res) => {
  res.sendFile('./views/index.html', {root})
});

app.get('/about', (req,res) => {
  res.sendFile('./views/about.html', {root})
});