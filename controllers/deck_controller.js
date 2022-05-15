// Set up router
const express = require('express');
const router = express.Router();

// Model used by controller
const Deck = require('../models/Deck');

//create route
router.post("/", async (req,res) => {
    try {
        let decks = await Deck.create(req.body);
        res.json(decks);
    }
    catch(err) {
        res.json({error: err});
    }
});

// read routes
router.get("/", async (req,res) => {
    try {
        res.json(await Deck.find({}));
    }
    catch(err) {
        res.json(err);
    }
});

router.get("/:id", async (req,res) => {
    try {
        res.json(await Deck.findOne({_id:req.params.id}));
    }
    catch(err) {
        res.json(err);
    }
});

// update route
router.put("/:id", async (req,res) => {
    try {
        res.json(await Deck.findByIdAndUpdate(req.params.id, req.body));
    }
    catch(err) {
        res.json(err);
    }
});

//delete route
router.delete("/:id", async (req,res) => {
    try {
        res.json(await Deck.findByIdAndDelete(req.params.id));
    }
    catch(err) {
        res.json(err);
    }
});

module.exports = router;