const Joi = require('joi');

const createShippingMethods = {
  body: Joi.object().keys({
    shipping_name: Joi.string().required(),
    shipping_price: Joi.string().required(),

  }),
};

const getShippingMethods = {
  params: Joi.object().keys({
    shippingMethodsId: Joi.string().required(),
  }),
};

const updateShippingMethods = {
  params: Joi.object().keys({
    shippingMethodsId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    shipping_name: Joi.string().required(),
    shipping_price: Joi.string().required(),
  }),
};

const deleteShippingMethods = {
  params: Joi.object().keys({
    shippingMethodsId: Joi.string().required(),
  }),
};

module.exports = {
  createShippingMethods,
  updateShippingMethods,
  getShippingMethods,
  deleteShippingMethods
};
