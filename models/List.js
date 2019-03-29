const mongoose = require("mongoose");
const Schema = mongoose.Schema;



var ListSchema = new Schema({
  user : {type: Number, ref: 'User'},
  item: [{type: Number, ref: 'Item'}],
 })

/**
 * Create a new List Schema to map Mongo documents to an object in our node application
 */

const List = mongoose.model("List", ListSchema);

module.exports = List;





