const Joi = require('joi');

const createUseraddress = {
  body: Joi.object().keys({
    user_address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postal_code: Joi.string().required(),
    is_default: Joi.string().required(),
  }),
};

const getUseraddress = {
  params: Joi.object().keys({
    useraddressId: Joi.string().required(),
  }),
};

const updateUseraddress = {
  params: Joi.object().keys({
    useraddressId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    user_address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postal_code: Joi.string().required(),
  }),
};

const deleteUseraddress = {
  params: Joi.object().keys({
    useraddressId: Joi.string().required(),
  }),
};

module.exports = {
  getUseraddress,
  deleteUseraddress,
  createUseraddress,
  updateUseraddress,
};
