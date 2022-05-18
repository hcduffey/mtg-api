// Model and schema definition for the Deck resource
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deckSchema = Schema({
    name: String,
    cards: [{
                id: {
                    type: String,
                    trim: true,
                    required: [true, "a valid id is required for cards"]
                }, 
                name: {
                    type: String,
                    trim: true  
                },
                imageUrl: {
                    type: String, 
                    trim: true,
                    // If no image is provided, just use the card back image
                    default:"https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013"
                },
                count: {
                    type: Number,
                    default: 1
                }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Deck = mongoose.model("Decks", deckSchema);
module.exports = Deck;