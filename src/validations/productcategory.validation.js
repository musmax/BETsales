const Joi = require('joi');

const createProductcategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required(),
  
  }),
};

const getProductcategory = {
  params: Joi.object().keys({
    productcategoryId: Joi.string().required(),
  }),
};

const updateProductcategory = {
  params: Joi.object().keys({
    productcategoryId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    category_name: Joi.string(),
  }),
};

const deleteProductcategory = {
  params: Joi.object().keys({
    productcategoryId: Joi.string().required(),
  }),
};

module.exports = {
  createProductcategory,
  updateProductcategory,
  getProductcategory,
  deleteProductcategory
};
