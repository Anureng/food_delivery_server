const mongoose = require("mongoose");

const Checking = new mongoose.Schema({
  Image: String,
});

module.exports = mongoose.model("checking", Checking);
