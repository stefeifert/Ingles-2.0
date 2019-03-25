const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var NoteSchema = new Schema({
  content: String
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;