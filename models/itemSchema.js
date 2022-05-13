const { number, string } = require("joi");
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
  productName: {
      type: String,
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
    address:{
      type: String,
      required:true,
    },
    contact:{
      type:Number,
      required:true,
    }
    
      
  },
  {
    timestamps: true,
  }
);
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
