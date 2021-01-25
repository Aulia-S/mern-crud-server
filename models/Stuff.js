const mongoose = require("mongoose");

const StuffSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    price: {
      type: "Number",
      required: true,
    },
    qty: {
      type: "Number",
      required: true,
    },
  },
  { timestamps: true }
);

const Stuff = mongoose.model("Stuff", StuffSchema);

module.exports = Stuff;
