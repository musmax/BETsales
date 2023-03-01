const Joi = require('joi');

const createUser = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'))
      .messages({
        'string.pattern.base': `Password validation failed`,
        'string.empty': `Password cannot be empty`,
        'any.required': `Password is required`,
      }),
    role: Joi.string(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    email: Joi.string().email(),
    username: Joi.string(),
    firstnameandlastname: Joi.string(),
    profileImg:Joi.string(),
    
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
