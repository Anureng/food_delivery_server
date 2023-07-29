const express = require("express");
const router = express.Router();

const { createProduct, getAllProduct } = require("../controller/product");

router.route("/uploadFile").post(createProduct);
router.route("/allProducts").get(getAllProduct);

module.exports = router;
