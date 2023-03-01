const { VariationOption } = require('../models/VaraiationOption');
const {Product} = require('../models/Product');
const {Variation} = require('../models/Variation')
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const { getUserById } = require('./user.service');


/**
 * Create VariationOptions
 * @param {string} userId
 * @param {Object} VariationBody
 * @return {promise<Variation>}
 */

const createVariationOption = async (userId, VariationOptionBody) => {
  VariationOptionBody['UserId'];
  const product = await Product.findByPk(VariationOptionBody.ProductId);
  const variation = await Variation.findByPk(VariationOptionBody.VariationId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product does not exist');
  }
  if (!variation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Variation does not exist');
  }
  const { role } = await getUserById(userId);

  if (role === 'admin') {
    return await VariationOption.create(VariationOptionBody);
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Create, exclusive to admin');

};

/**
 * Get all VariationOptions
 * @returns {Promise<VariationOptions>}
 */
const getVariationOptions = async () => {
  return await VariationOption.findAll();
};

/**
 * Get VariationOption by id
 * @param {ObjectId} VariationOptionId
 * @returns {Promise<VariationOption>}
 */
const getVariationOptionById = async (VariationOptionId) => {
  const variationOption = await VariationOption.findByPk(VariationOptionId);
  if (!variationOption) {
    throw new ApiError(httpStatus.NOT_FOUND, 'VariationOption not found');
  }
  return variationOption;
};

/**
 * Update VariationOption by id
 * @param {ObjectId} VariationOptionId
 * @param {Object} VariationOptionBody
 * @returns {Promise<VariationOption>}
 */
const updateVariationOptionById = async (VariationOptionId, VariationOptionBody, userId) => {
  const variationOption = await VariationOption.findByPk(VariationOptionId);
  if (!variationOption) {
    throw new ApiError(httpStatus.NOT_FOUND, 'VariationOption not found');
  }
  const { role } = await getUserById(userId);

  if (role === 'admin') {
    Object.assign(VariationOption, VariationOptionBody);
    return await VariationOption.update(VariationOption.dataValues, { where: { id: VariationOptionId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Edit ');
};

/**
 * Delete VariationOption by id
 * @param {ObjectId} VariationOptionId
 * @returns {Promise<VariationOption>}
 */
const deleteVariationOptionById = async (VariationOptionId, userId) => {
  logger.info(VariationOptionId);
  const variationOption = await VariationOption.findByPk(VariationOptionId);
  if (!variationOption) {
    throw new ApiError(httpStatus.NOT_FOUND, 'VariationOption not found');
  }

  const { role } = await getUserById(userId);
  if (VariationOption.UserId === userId || role === 'admin') {
    return await VariationOption.destroy({ where: { id: VariationOptionId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Delete, Exclusive to admin');
};

module.exports = {
  createVariationOption,
  getVariationOptions,
  getVariationOptionById,
  updateVariationOptionById,
  deleteVariationOptionById,
};
