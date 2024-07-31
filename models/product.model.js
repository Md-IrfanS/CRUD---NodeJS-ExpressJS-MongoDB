const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: String,
      require: true,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model('Product', productSchema);
module.exports = ProductModel