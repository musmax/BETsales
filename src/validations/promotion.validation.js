const Joi = require('joi');

const createPromotion = {
  body: Joi.object().keys({
    promotion_name: Joi.string().required(),
    promotion_description: Joi.string().required(),
    discount: Joi.number().required(),
    start_date: Joi.number().required(),
    end_date: Joi.number().required(),
  }),
};

const getPromotion = {
  params: Joi.object().keys({
    promotionId: Joi.string().required(),
  }),
};

const updatePromotion = {
  params: Joi.object().keys({
    promotionId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    promotion_name: Joi.string().required(),
    promotion_description: Joi.string().required(),
    discount: Joi.number().required(),
    start_date: Joi.number().required(),
    end_date: Joi.number().required(),
  }),
};

const deletePromotion = {
  params: Joi.object().keys({
    promotionId: Joi.string().required(),
  }),
};

module.exports = {
  createPromotion,
  updatePromotion,
  getPromotion,
  deletePromotion
};
