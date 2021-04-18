const ErrorResponse = require("../utils/errorResponse");
const Feedback = require("../model/Feedback");
const asyncHandler = require("../middleware/async");

exports.createFeedback = asyncHandler(async (req, res, next) => {

    const feedback = await Feedback.create(req.body);
  
    if (!feedback) {
      return next(new ErrorResponse("Error submitting feedback"), 404);
    }

    res.status(201).json({
      success: true,
      data: feedback,
    });
  });

exports.getAllFeedback = asyncHandler(async (req, res, next) => {
  const feedback = await Feedback.find({});

  res.status(201).json({
    success: true,
    count: feedback.length,
    data: feedback,
  });
});

exports.getFeedbackById = asyncHandler(async (req, res, next) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorResponse("Feedback not found"), 404);
  }

  res.status(200).json({
    success: true,
    data: feedback,
  });
});