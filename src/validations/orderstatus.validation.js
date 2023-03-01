const Joi = require('joi');

const createQuestion = {
  body: Joi.object().keys({
    value: Joi.string().required(),
  }),
};

module.exports = {
  createQuestion
};
