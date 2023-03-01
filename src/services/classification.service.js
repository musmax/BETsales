const { Classification } = require('../models/Classification');
const { User } = require('../models/User');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');

/**
 * Create Classification
 * @param {string} userId
 * @param {Object} ClassificationBody
 * @return {promise<Classification>}
 */
const createClassification = async ( ClassificationBody) => {
  return await Classification.create(ClassificationBody);
};

/**
 * Get all Classifications
 * @returns {Promise<Classifications>}
 */

const getClassifications = async () => {
  const Classifications = await Classification.findAll({
  });
  return Classifications;
};

/**
 * Get Classification by id
 * @param {ObjectId} ClassificationId
 * @returns {Promise<Classification>}
 */
const getClassificationById = async (ClassificationId) => {
  const classification = await Classification.findByPk(ClassificationId, {
  });

  if (!classification) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Classification not found');
  }
  return Classification;
};

/**
 * Update Classification by id
 * @param {ObjectId} ClassificationId
 * @param {Object} ClassificationBody
 * @returns {Promise<Classification>}
 */
const updateClassificationById = async (ClassificationId, ClassificationBody) => {
  const classification = await Classification.findByPk(ClassificationId);
  if (!classification) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Classification not found');
  }
  Object.assign(Classification, ClassificationBody);
  return await Classification.update(Classification.dataValues, { where: { id: ClassificationId } });
};

/**
 * Delete Classification by id
 * @param {ObjectId} ClassificationId
 * @returns {Promise<Classification>}
 */
const deleteClassificationById = async (ClassificationId) => {
  logger.info(ClassificationId);
  const classification = await Classification.findByPk(ClassificationId);
  if (!classification) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Classification not found');
  }
  return await Classification.destroy({ where: { id: ClassificationId } });
};

module.exports = {
  createClassification,
  getClassifications,
  getClassificationById,
  updateClassificationById,
  deleteClassificationById,
};
