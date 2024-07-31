const express = require('express');
const { postProducts, getProducts, getProduct, updateProduct } = require('../controller/product.controller.js');

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct)
router.post("/create", postProducts);
router.patch("/:id", updateProduct);

module.exports = router;