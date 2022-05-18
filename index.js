// IMPORTS
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
require('./config/db.connect');
const deckController = require('./controllers/deck_controller');
const authController = require('./controllers/auth_controller');

// MIDDLEWARE
app.use(cors()); // currently no CORS restrictions for the API
app.use(morgan("dev")); // can be changed to more extensive logging if needed 
app.use(express.json());

// ROUTER
app.use("/auth", authController);
app.use("/decks", deckController);

// HOME ROUTE
app.get("/", (req, res) => res.send("in root path"));

app.listen(PORT, () => console.log('Express up on port ' + PORT));