const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Pokemon = require('./models/pokemon');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Create a get route which will display your pokemon data as json in the browser

// app.get("/pokemon", (req, res) => {
//   res.send(Pokemon);
// });

// Set up your index view (Used Context Variable For Learning Purposes)

app.get("/pokemon", (req, res) => {
  const context = {
    pokemon: Pokemon
  }
  res.render('index.ejs', context);
});

// Set up a post route

app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});


app.post('/pokemon', (req, res) => {
  Pokemon.push(req.body);
  res.redirect('/pokemon');
});

//Set up your show route

app.get("/pokemon/:id", (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.id]
  });
});



// Server listening


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

module.exports = app