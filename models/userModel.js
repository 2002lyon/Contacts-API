const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the iser email address"],
      unique: [true, "Email address is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter the user password"],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
