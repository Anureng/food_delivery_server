const mongoose = require("mongoose");

const Restaurent = new mongoose.Schema({
  Name: {
    type: String,
  },
  Description: {
    type: String,
  },
  Time: {
    type: String,
  },
  Rating: {
    type: String,
  },
  Image: {
    type: String,
  },
});

module.exports = mongoose.model("Restaurent", Restaurent);
