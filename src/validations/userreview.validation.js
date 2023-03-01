const Joi = require('joi');

const createUserreview = {
  body: Joi.object().keys({
    rating_value: Joi.string().required(),
    comment: Joi.string().required(),
    ProductId:Joi.string().required(),
    UserId:Joi.string().required(),
  }),
};

const getUserreview = {
  params: Joi.object().keys({
    userreviewId: Joi.string().required(),
  }),
};

const updateUserreview = {
  params: Joi.object().keys({
    userreviewId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    rating_values: Joi.string().required(),
    comment: Joi.string().required(),
    ProductId:Joi.string().required(),
    UserId:Joi.string().required(),
  }),
};

const deleteUserreview = {
  params: Joi.object().keys({
    userreviewId: Joi.string().required(),
  }),
};

module.exports = {
  createUserreview,
  updateUserreview,
  getUserreview,
  deleteUserreview
};
