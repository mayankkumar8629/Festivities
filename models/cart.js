const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  listings: {
    type: Schema.Types.ObjectId,
    ref: "Listings",
    required:true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

module.export = mongoose.model("Cart", cartSchema);
