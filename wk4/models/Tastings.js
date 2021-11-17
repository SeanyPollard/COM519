const mongoose = require("mongoose");
const { Schema } = mongoose;

const tastingsSchema = new Schema(
  {
    twitter: String,
    tastings: Number,
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Taster", tasterSchema);