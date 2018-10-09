const express = require('express');
const app = express();
const port = 3000;

const Pokemon = require('./models/pokemon');

//create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser

app.get("/pokemon", (req, res) => {
  res.send(Pokemon);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});