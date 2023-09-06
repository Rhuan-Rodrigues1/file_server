const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Files = mongoose.model("Files", FileSchema);

module.exports = Files;
