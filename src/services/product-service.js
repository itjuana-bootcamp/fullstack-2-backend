const Product = require("../models/product");

const getProducts = async () => {
  const products = await Product.find().lean().exec();
  return products;
};

const saveProduct = async (product) => {
  const savedProduct = new Product(product);
  await savedProduct.save();
  return savedProduct;
};

module.exports = {
  getProducts,
  saveProduct,
};
