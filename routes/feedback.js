const express = require("express");
const  router = express.Router();

const {
  createFeedback,
  getAllFeedback, 
  getFeedbackById,
  } = require("../controllers/feedback");

const { protect } = require("../middleware/auth");

router.route("/").post(protect, createFeedback).get(protect, getAllFeedback);

router.route("/:id").get(protect, getFeedbackById);

module.exports = router