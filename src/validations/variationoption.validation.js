const Joi = require('joi');

const createVariableoption = {
  body: Joi.object().keys({
    value: Joi.string().required(),
    VariationId: Joi.string().required(),
    ProductId: Joi.string().required(),
    itemsavailable: Joi.string().required(),
  }),
};

const getVariableoption = {
  params: Joi.object().keys({
    variableoptionId: Joi.string().required(),
  }),
};

const updateVariableoption = {
  params: Joi.object().keys({
    variableoptionId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    value: Joi.string().required(),
    itemsavailable: Joi.string().required(),
  }),
};

const deleteVariableoption = {
  params: Joi.object().keys({
    VariableoptionId: Joi.string().required(),
  }),
};

module.exports = {
  createVariableoption,
  updateVariableoption,
  getVariableoption,
  deleteVariableoption
};
