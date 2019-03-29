const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the Item model schema
const BogoSchema = new Schema({
  bogo: String,
  price: Number,
  quantity: Number,
  filename: String
});



module.exports = mongoose.model('Bogo', BogoSchema);
