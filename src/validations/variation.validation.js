const Joi = require('joi');

const createVariation = {
  body: Joi.object().keys({
    variation_option: Joi.string().required(),
  }),
};

const getVariation = {
  params: Joi.object().keys({
    variationId: Joi.string().required(),
  }),
};

const updateVariation = {
  params: Joi.object().keys({
    variationId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    variation_option: Joi.string(),
  }),
};

const deleteVariation = {
  params: Joi.object().keys({
    variationId: Joi.string().required(),
  }),
};

module.exports = {
  createVariation,
  updateVariation,
  getVariation,
  deleteVariation
};
