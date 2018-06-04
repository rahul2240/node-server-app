const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'home page',
    date: new Date().currentyear
  });
});

app.get('/about', (req,res) => {
  res.render('about', {
    title: 'About Page',
    heading: 'Welcome to about page'
  });
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING AT PORT 3000");
});
