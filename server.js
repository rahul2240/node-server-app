const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();


hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('year', () => {
  return new Date().getFullYear()
} );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'home page',

  });
});

app.get('/about', (req,res) => {
  res.render('about', {
    title: 'About Page',
    heading: 'Welcome to about page'
  });
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT {port}`);
});
