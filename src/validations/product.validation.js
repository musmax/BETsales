const Joi = require('joi');

const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required(),
    description: Joi.string().required(),
    brand_name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
};

const getProductByPrice = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    price: Joi.string().required(),
  }),
};


const getProductByBrandname = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    brand_name: Joi.string().required(),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    product_name: Joi.string().required(),
    description: Joi.string().required(),
    brand_name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
  }),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
};

module.exports = {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  getProductByBrandname,
  getProductByPrice
};
