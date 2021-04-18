const mongoose = require("mongoose");

const Notice = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter title"],
  },
  message: {
    type: String,
    required: [true, "Enter notice message"],
  },
});

module.exports = mongoose.model("Notice", Notice);
