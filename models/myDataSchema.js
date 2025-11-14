const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  userName: String,
});

const Mydata = mongoose.model("Mydata", userSchema);

module.exports = Mydata;
