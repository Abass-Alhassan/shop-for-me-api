const { Router } = require("express");
const { createItem, getItem } = require("../controllers/itemController");
const { protect, } = require("../middlewares/authMiddleware");

const router = Router();

router.route("/items").post( createItem).get(protect, getItem);

module.exports = router;
