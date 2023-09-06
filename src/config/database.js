const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
