const Item = require("../models/itemSchema");

//create item
const createItem = (req, res) => {
  const newItem = new Item({
    productName: req.body.productName,
    price: req.body.price,
    quantity: req.body.quantity,
    address: req.body.address,
    contact: req.body.contact,
  });
  newItem.save();
  res.status(200).json(newItem);
};
//get items
const getItem = async (req, res) => {
  const items = await Item.find();
  res.status(200).json(items);
};

module.exports = { createItem, getItem };
