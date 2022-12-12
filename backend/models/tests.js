const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  username: String,
  name: String,
});

const Test = mongoose.model("tests", testSchema);

module.exports = Test;
