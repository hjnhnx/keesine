const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  facebook: {
    type: String,
    required: true,
    unique: true,
  },
  fanPage: {
    type: String,
    required: true,
    unique: true,
  },
  github: {
    type: String,
    required: true,
    unique: true,
  },
  twitter: {
    type: String,
    required: true,
    unique: true,
  },
  instagram: {
    type: String,
    required: true,
    unique: true,
  },
  group: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
