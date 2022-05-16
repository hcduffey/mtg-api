const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deckSchema = Schema({
    name: String,
    cards: [{id: String, imageUrl: String, count: {type: Number, default:0}]
});

const Deck = mongoose.model("Decks", deckSchema);
module.exports = Deck;