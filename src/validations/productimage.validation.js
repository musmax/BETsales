const Joi = require('joi');

const createProductimage = {
  body: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required(),
    data: Joi.string().required(),
    productId:Joi.string().required(),
  }),
};

const getProductimage = {
  params: Joi.object().keys({
    ProductimageId: Joi.string().required(),
  }),
};

const updateProductimage = {
  params: Joi.object().keys({
    ProductimageId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    product_image: Joi.string(),
   
  }),
};

const deleteProductimage = {
  params: Joi.object().keys({
    productimageId: Joi.string().required(),
  }),
};

module.exports = {
  createProductimage,
  updateProductimage,
  getProductimage,
  deleteProductimage
};
