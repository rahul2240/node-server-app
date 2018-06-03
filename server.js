const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/about', (req,res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING AT PORT 3000");
});
