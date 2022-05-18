// Controller for all routes to authenticate a user
require('dotenv').config();
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

// Set up router
const express = require('express');
const router = express.Router();

// Model used by controller
const User = require('../models/User');

//authorize route
router.post("/", async (req,res) => {
    try {
        const {username, password} = req.body;

        const validUser = await User.findOne({username: username});
        if(!validUser) {
            return res.json({error: "could not find user"});
        }

        const validLogin = await bcrypt.compare(password, validUser.password);
        
        if(validLogin) {
            let token = jwt.sign({ id: validUser._id }, process.env.SECRET, {
                expiresIn: 86400 
            });
            return res.json({token: token, user: validUser.username});
        }
        else {
            return res.json({error: "password is incorrect"});
        }
    }
    catch(err) { return res.json({error: err}); }
});

// sign-up route
router.post("/signup", async(req, res) => {
    try {
        const {username, password} = req.body;
    
        const userExists = await User.findOne({username: username});
        if(userExists) {
            return res.json({error: "username is taken"});
        }

        const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await User.create({username: username, password: passwordHash});
        if(newUser) {
            return res.json({message: "success"});
        }
        else {
            return res.json({error: "could not create user"});
        }
    }
    catch(err) { return res.json({error: err}) }
});

module.exports = router;