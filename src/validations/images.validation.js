const Joi = require('joi');

const createimage = {
  body: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required(),
    data: Joi.string().required(),
    productId:Joi.number().required(),
  }),
};

const getimage = {
  params: Joi.object().keys({
    imageId: Joi.string().required(),
  }),
};

const updateimage = {
  params: Joi.object().keys({
    imageId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required(),
    data: Joi.string().required(),
   
  }),
};

const deleteimage = {
  params: Joi.object().keys({
    imageId: Joi.string().required(),
  }),
};

module.exports = {
  createimage,
  updateimage,
  getimage,
  deleteimage
};
