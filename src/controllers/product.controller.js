const { productService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createProduct = catchAsync(async (req, res) => {
  logger.info(req.userId);
  const userId = req.userId;
  const Product = await productService.createProduct(userId, req.body);
  res.status(httpStatus.CREATED).json(Product);
});

const updateProductById = catchAsync(async (req, res) => {
 await productService.updateProductById(req.params.ProductId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getProducts = catchAsync(async (req, res) => {
  const Products = await productService.getProducts();
  res.status(httpStatus.OK).json(Products);
});

const getProductsByUser = catchAsync(async (req, res) => {
  const Products = await productService.getProductsByUser(req.params.userId);
  res.status(httpStatus.OK).json(Products);
});

const getProductById = catchAsync(async (req, res) => {
  const Product = await productService.getProductById(req.params.ProductId);
  res.status(httpStatus.OK).json(Product);
});

const getProductByBrandName = catchAsync(async (req, res) => {
  const Product = await productService.getProductByBrandName(req.params.brand_name);
  res.status(httpStatus.OK).json(Product);
});

const getProductByPrice = catchAsync(async (req, res) => {
  const Product = await productService.getProductByPrice(req.params.price);
  res.status(httpStatus.OK).json(Product);
});

const deleteProductById = catchAsync(async (req, res) => {
  const Product = await productService.deleteProductById(req.params.ProductId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  deleteProductById,
  getProductsByUser,
  getProductByBrandName,
  getProductByPrice,
  updateProductById,
};
