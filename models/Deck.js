const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deckSchema = Schema({
    name: String,
    cards: [{id: String, imageUrl: String}]
});

const Deck = mongoose.model("Decks", deckSchema);
module.exports = Deck;