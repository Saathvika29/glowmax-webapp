const mongoose = require("mongoose");

const hobbySchema =
  new mongoose.Schema({

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    hobby: {
      type: String,
      required: true
    },

    hours: {
      type: Number,
      default: 0
    }

  });

module.exports =
  mongoose.model("Hobby", hobbySchema);