const express = require("express");
const  router = express.Router();

const {
  createNotice,
  getAllNotice, 
  getNoticeById,
  } = require("../controllers/notice");

const { protect } = require("../middleware/auth");

router.route("/").post(protect, createNotice).get(protect, getAllNotice);

router.route("/:id").get(protect, getNoticeById);

module.exports = router