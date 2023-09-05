const multer = require("multer");
const path = require("path");
const { ErrorFile } = require("../utils/Errors/errorsFiles");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(
        new ErrorFile("Caminho do arquivo inexistente"),
        path.resolve(__dirname, "..", "..", "tmp", "uploads")
      );
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    },
    fileFilter: (req, file, cb) => {
      const mimeType = [
        "image/x-icon",
        "text/html",
        "text/javascript",
        "application/json",
        "text/css",
        "image/png",
        "image/jpeg",
        "audio/wav",
        "audio/mpeg",
        "image/svg+xml",
        "application/pdf",
        "application/msword",
        "application/vnd.ms-fontobject",
        "application/font-sfnt",
      ];

      if (mimeType.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new ErrorFile("Tipo do arquivo invalido"));
      }
    },
  }),
};
