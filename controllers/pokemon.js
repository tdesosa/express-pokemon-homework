// Require Express
const express = require('express');
const router = express.Router();

// Require The Models The Controller Needs
const Pokemon = require('../models/pokemon');

// Index Route
router.get("/", (req, res) => {
    res.render("index.ejs", {pokemon: Pokemon});
});

// Delete Route

router.delete('/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

// Edit Route

router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
      pokemon: Pokemon[req.params.id],
      id: req.params.id
    });
  });

// Put Route

router.put('/:id', (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
});

// New Route

router.get('/new', (req, res) => {
    res.render('new.ejs');
  });

router.post('/', (req, res) => {
Pokemon.push(req.body);
res.redirect('/pokemon')
});

// Show Route

router.get('/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});


module.exports = router;