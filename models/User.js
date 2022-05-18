// Model and schema definition for the Deck resource
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    username: {
        type: String,
        require: [true, 'username is required for a user']
    },
    password: {
        type: String,
        require: [true, 'password is required for a user']
    }
});

const User = mongoose.model("Users", userSchema);
module.exports = User;