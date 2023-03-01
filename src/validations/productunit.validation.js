const Joi = require('joi');

const createProductunit = {
  body: Joi.object().keys({
    SKU: Joi.string().required(),
    quantity_in_stock: Joi.string().required(),
    price: Joi.string().required()
   
  }),
};

const getProductunit = {
  params: Joi.object().keys({
    ProductunitId: Joi.string().required(),
  }),
};

const updateProductunit = {
  params: Joi.object().keys({
    ProductunitId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    SKU: Joi.string(),
    quantity_in_stock: Joi.string().required(),
    price : Joi.string().required()
  }),
};

const deleteProductunit = {
  params: Joi.object().keys({
    ProductunitId: Joi.string().required(),
  }),
};

module.exports = {
  createProductunit,
  updateProductunit,
  getProductunit,
  deleteProductunit
};
