const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
});

module.exports = mongoose.model("register_form", FormSchema);
