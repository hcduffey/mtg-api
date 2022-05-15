// IMPORTS
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
require('./config/db.connect');

// MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.get("/", (req, res) => res.send("in root path"));
app.listen(PORT, () => console.log('Express up on port ' + PORT));