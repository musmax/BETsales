const Joi = require('joi');

const createOrderline = {
  body: Joi.object().keys({
    qty: Joi.string().required(),
    price: Joi.string().required(),
  }),
};

const getOrderline = {
  params: Joi.object().keys({
   orderlineId: Joi.string().required(),
  }),
};

const updateOrderline = {
  params: Joi.object().keys({
    OrderlineId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    qty: Joi.string().required(),
    price: Joi.string().required(),
  }),
};

const deleteOrderline = {
  params: Joi.object().keys({
    OrderlineId: Joi.string().required(),
  }),
};

module.exports = {
  createOrderline,
  updateOrderline,
  getOrderline,
  deleteOrderline
};
