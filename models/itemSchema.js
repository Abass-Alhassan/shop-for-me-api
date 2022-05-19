const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    items: {
      type: Array,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
