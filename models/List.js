const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var ListSchema = new Schema({
  user_id: Number,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});

const List = mongoose.model("List", ListSchema);

module.exports = List;





