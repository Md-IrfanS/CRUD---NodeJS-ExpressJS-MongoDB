const ProductModel = require("../models/product.model");

const postProducts = async (req, res) => {
    console.log(req.body)
  try {
    const newProduct = new ProductModel(req.body);
    const data = await newProduct.save();
    console.log(data, "new data");
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    console.log(products);
    res.status(200).json({message: "successfully", details: {
        allProducts: products
    }})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const updated = await ProductModel.findOneAndUpdate({_id: id}, req.body, {new: true});
        res.status(202).json(updated);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
  postProducts,
  getProducts,
  getProduct,
  updateProduct
};
