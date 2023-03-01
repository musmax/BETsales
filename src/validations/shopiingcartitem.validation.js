const Joi = require('joi');

const createShoppingcartitem = {
  body: Joi.object().keys({
    item: Joi.string().required(),
  }),
};

const getShoppingcartitem = {
  params: Joi.object().keys({
    shoppingcartitemId: Joi.string().required(),
  }),
};

const updateShoppingcartitem = {
  params: Joi.object().keys({
    shoppingcartitemId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    item: Joi.string().required(),
  }),
};

const deleteShoppingcartitem = {
  params: Joi.object().keys({
    shoppingcartitemId: Joi.string().required(),
  }),
};

module.exports = {
  createShoppingcartitem,
  updateShoppingcartitem,
  getShoppingcartitem,
  deleteShoppingcartitem
};
