const express = require('express');
const app = express();
const port = 3000;

const Pokemon = require('./models/pokemon');

// Create a get route which will display your pokemon data as json in the browser

app.get("/pokemon", (req, res) => {
  res.send(Pokemon);
});

// Set up your index view

app.get("/pokemon/:index", (req, res) => {
  const context = {
    pokemon: Pokemon
  }
  res.render('index.ejs', context);
});

//Set up your show route




// Server listening


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});