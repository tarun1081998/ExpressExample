const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      maxlength: 50,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 25,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
})

const User = mongoose.model('User', userSchema)
module.exports = User;