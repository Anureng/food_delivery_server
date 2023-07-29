const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Category: String,
  Type: String,
  Price: Number,
  Rating: Number,
  Image: String,
});

module.exports = mongoose.model("product", productSchema);
