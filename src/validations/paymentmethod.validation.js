const Joi = require('joi');

const createPaymentmethod = {
  body: Joi.object().keys({
    payment_type: Joi.string().required(),
 
  }),
};

module.exports = {
  createPaymentmethod
};
