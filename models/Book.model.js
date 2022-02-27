const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  price: { type: Number },
  image: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
