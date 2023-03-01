const Joi = require('joi');

const createShippingmethods = {
  body: Joi.object().keys({
    order_detail: Joi.string().required(),
  }),
};

const getShippingmethods = {
  params: Joi.object().keys({
    shippingmethodsId: Joi.string().required(),
  }),
};

const updateShippingmethods = {
  params: Joi.object().keys({
    shippingmethodsId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    order_detail: Joi.string().required(),
  }),
};

const deleteShippingmethods = {
  params: Joi.object().keys({
    shippingmethodsId: Joi.string().required(),
  }),
};

module.exports = {
  createShippingmethods,
  updateShippingmethods,
  getShippingmethods,
  deleteShippingmethods
};
