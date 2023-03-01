const Joi = require('joi');

const createBillingaddress = {
  body: Joi.object().keys({
 
    billing_address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postal_code: Joi.string().required(),
    
  }),
};

const updateBillingaddress = {
  params: Joi.object().keys({
    billingaddressId: Joi.string().required(),
  }),
  body: Joi.object().keys({
 
    billing_address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    postal_code: Joi.string().required(),
  }),
};



module.exports = {
  createBillingaddress,
  updateBillingaddress,
};
