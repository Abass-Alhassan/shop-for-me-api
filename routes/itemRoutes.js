const { Router } = require("express");
const { createItem, getItem } = require("../controllers/itemController");
const { protect, } = require("../middlewares/authMiddleware");

const router = Router();

router.route("/items").post(protect, createItem).get(protect, getItem);

module.exports = router;
