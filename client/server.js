const express = require("express");
const authWare = require("./middleware/authware");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost/inglesdb', { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authWare);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});