const Joi = require('joi');

const createclassification = {
  body: Joi.object().keys({
    classification: Joi.string().required(),
  }),
};

const getclassification = {
  params: Joi.object().keys({
    ClassificationId: Joi.string().required(),
  }),
};

const updateclassification = {
  params: Joi.object().keys({
    ClassificationId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    classification: Joi.string(),
  }),
};

const deleteclassification = {
  params: Joi.object().keys({
    ClassificationId: Joi.string().required(),
  }),
};

module.exports = {
  createclassification,
  updateclassification,
  getclassification,
  deleteclassification
};
