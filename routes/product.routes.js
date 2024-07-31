const express = require('express');
const { postProducts, getProducts } = require('../controller/product.controller.js');

const router = express.Router();

router.get("/", getProducts);
router.post("/create", postProducts);

module.exports = router;