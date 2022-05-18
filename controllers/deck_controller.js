// Controller for all routes to perform CRUD on the deck resource

// Set up router
const express = require('express');
const router = express.Router();

// imports for authentication

let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

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

const verifyUser = async (req, res, next) => {

}

//create route
router.post("/", [verifyToken, verifyUser], async (req,res) => {
    try {
        let decks = await Deck.create(req.body);
        res.json(decks);
    }
    catch(err) {
        res.json({error: err});
    }
});

// read routes
router.get("/", [verifyToken, verifyUser], async (req,res) => {
    try {
        res.json(await Deck.find({}));
    }
    catch(err) {
        res.json(err);
    }
});

router.get("/:id", [verifyToken, verifyUser], async (req,res) => {
    try {
        res.json(await Deck.findOne({_id:req.params.id}));
    }
    catch(err) {
        res.json(err);
    }
});

// update route
router.put("/:id", [verifyToken, verifyUser], async (req,res) => {
    try {
        res.json(await Deck.findByIdAndUpdate(req.params.id, req.body));
    }
    catch(err) {
        res.json(err);
    }
});

//delete route
router.delete("/:id", [verifyToken, verifyUser], async (req,res) => {
    try {
        res.json(await Deck.findByIdAndDelete(req.params.id));
    }
    catch(err) {
        res.json(err);
    }
});

module.exports = router;