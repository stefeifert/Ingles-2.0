const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the Item model schema
const ItemSchema = new Schema({
  item: String,
  price: Number,
  quantity: Number
});



module.exports = mongoose.model('Item', ItemSchema);
