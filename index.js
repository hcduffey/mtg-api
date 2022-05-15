require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("in root path"));

app.listen(PORT, () => console.log('Express up on port ' + PORT));