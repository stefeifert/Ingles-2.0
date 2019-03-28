require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const authWare = require("./middleware/authware");

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/inglesdb', { useNewUrlParser: true });

=======
>>>>>>> f0220c872e6654e5acf1f75af9a872aec57dbb5a
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authWare);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/inglesdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

// Add routes, both API and view
require('./routes/api-routes')(app);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});
