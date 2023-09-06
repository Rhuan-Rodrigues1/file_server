const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");
const { filesController } = require("./controllers/filesControllers");

const router = express.Router();

router.post("/files", multer(multerConfig).single("file"), async (req, res) => {
  return await filesController(req, res);
});

module.exports = { router };
