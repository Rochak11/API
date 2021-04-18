const ErrorResponse = require("../utils/errorResponse");
const Notice = require("../model/Notice");
const asyncHandler = require("../middleware/async");

exports.createNotice = asyncHandler(async (req, res, next) => {

    const notice = await Notice.create(req.body);
  
    if (!notice) {
      return next(new ErrorResponse("Error adding notice"), 404);
    }

    res.status(201).json({
      success: true,
      data: notice,
    });
  });

exports.getAllNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.find({});

  res.status(201).json({
    success: true,
    count: notice.length,
    data: notice,
  });
});

exports.getNoticeById = asyncHandler(async (req, res, next) => {
  const notice = await Notice.findById(req.params.id);

  if (!notice) {
    return next(new ErrorResponse("Notice not found"), 404);
  }

  res.status(200).json({
    success: true,
    data: notice,
  });
});