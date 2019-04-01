const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the Message model schema
const MessageSchema = new Schema({
  name: String,
  message: String
});



module.exports = mongoose.model('Message', MessageSchema);
