const mongoose = require("mongoose");
const { Schema } = mongoose;

const tastingSchema = new Schema(
  {
    points: Number,
    title: String,
    description: String,
    taster_name: String,
    taster_twitter_handle: String,
    price: Number,
    designation: String,
    variety_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Variety",
    },
    province_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Province",
    },
    country_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Country",
    },
    winery: String,
    taster_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Taster",
    },
    regions: [{type: mongoose.Schema.Types.ObjectId, ref: "Region"}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasting", tastingSchema);
