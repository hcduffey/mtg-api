// Controller for all routes to authenticate a user

// Set up router
const express = require('express');
const router = express.Router();

// Model used by controller
const User = require('../models/User');

//create route
router.post("/", (req,res) => {
    res.json({token: "1234", user: "Cliff"});
});

module.exports = router;