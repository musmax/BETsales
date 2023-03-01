const { Variation } = require('../models/Variation');
const { User } = require('../models/User');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');

/**
 * Create Variation
 * @param {string} userId
 * @param {Object} VariationBody
 * @return {promise<Variation>}
 */
const createVariation = async ( VariationBody) => {
  return await Variation.create(VariationBody);
};

/**
 * Get all Variations
 * @returns {Promise<Variations>}
 */

const getVariations = async () => {
  const Variations = await Variation.findAll({
  });
  return Variations;
};

/**
 * Get Variation by id
 * @param {ObjectId} VariationId
 * @returns {Promise<Variation>}
 */
const getVariationById = async (VariationId) => {
  const variation = await Variation.findByPk(VariationId, {
  });

  if (!variation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Variation not found');
  }
  return variation;
};

/**
 * Update Variation by id
 * @param {ObjectId} VariationId
 * @param {Object} VariationBody
 * @returns {Promise<Variation>}
 */
const updateVariationById = async (VariationId, VariationBody) => {
  const variation = await Variation.findByPk(VariationId);
  if (!variation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Variation not found');
  }
  Object.assign(Variation, VariationBody);
  return await Variation.update(Variation.dataValues, { where: { id: VariationId } });
};

/**
 * Delete Variation by id
 * @param {ObjectId} VariationId
 * @returns {Promise<Variation>}
 */
const deleteVariationById = async (VariationId) => {
  logger.info(VariationId);
  const variation = await Variation.findByPk(VariationId);
  if (!variation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Variation not found');
  }
  return await Variation.destroy({ where: { id: VariationId } });
};

module.exports = {
  createVariation,
  getVariations,
  getVariationById,
  updateVariationById,
  deleteVariationById,
};
