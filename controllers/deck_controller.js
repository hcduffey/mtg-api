// Controller for all routes to perform CRUD on the deck resource

// Set up router
const express = require('express');
const router = express.Router();

// imports for authentication

let jwt = require('jsonwebtoken');

// Model used by controller
const Deck = require('../models/Deck');

// Middleware for deck routes
// https://www.bezkoder.com/node-js-mongodb-auth-jwt/
const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
      return res.status(403).json({ message: "No token provided!" });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
    });
};

//create route
router.post("/", verifyToken, async (req,res) => {
    try {
        const newDeck = {...req.body, user: req.userId};
        console.log(newDeck);

        if(await Deck.create(newDeck)) {
            res.json({message: "create deck success"});
        } else {
            res.json({error: "error in creating deck"})
        }
    }
    catch(err) {
        res.json({error: err});
    }
});

// read routes
router.get("/", verifyToken, async (req,res) => {
    try {
        const decks = await Deck.find({user: req.userId});
        res.json(decks);
    }
    catch(err) {
        res.json(err);
    }
});

router.get("/:id", verifyToken, async (req,res) => {
    try {
        const findDeck = await Deck.findOne({_id:req.params.id, user: req.userId});
        if(findDeck) {
            res.json({message: "find deck success"});
        }
        else {
            res.json({error: "could not find requested deck"});
        }
        
    }
    catch(err) {
        res.json(err);
    }
});

// update route
router.put("/:id", verifyToken, async (req,res) => {
    try {
        let deletedDeck = await Deck.updateOne({_id: req.params.id, user: req.userId}, req.body);
        if(deletedDeck) {
            res.json({message: "successfully deleted deck"});
        }
        else {
            console.log("update didn't work");
            res.json({error: "user does not own deck"});
        }
    }
    catch(err) {
        res.json(err);
    }
});

//delete route
router.delete("/:id", verifyToken, async (req,res) => {
    try {
        if(await Deck.deleteOne({_id: req.params.id, user: req.userId})) {
            res.json({message: "successfully deleted deck"});
        }
        else {
            res.json({error: "user does not own deck"});
        }
    }
    catch(err) {
        res.json(err);
    }
});

module.exports = router;