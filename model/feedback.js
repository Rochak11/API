const mongoose = require("mongoose");

const Feedback = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter title"],
  },
  message: {
    type: String,
    required: [true, "Enter feedback message"],
  },
});

module.exports = mongoose.model("Feedback", Feedback);