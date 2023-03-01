const { BillingAddress } = require('../models/BillingAddress');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const { getUserById } = require('./user.service');


const createBillingAddress = async ( BillingAddressBody) => {
  BillingAddressBody['UserId'];
    return await BillingAddress.create(BillingAddressBody);
  }

/**
 * Get all BillingAddress
 * @returns {Promise<BillingAddress>}
 */
const getBillingAddress = async () => {
  return await BillingAddress.findAll();
};

/**
 * Get BillingAddress by id
 * @param {ObjectId} BillingAddressId
 * @returns {Promise<BillingAddress>}
 */
const getBillingAddressById = async (BillingAddressId) => {
  const billingaddress = await BillingAddress.findByPk(BillingAddressId);
  if (!billingaddress) {
    throw new ApiError(httpStatus.NOT_FOUND, 'BillingAddress not found');
  }
  return billingaddress;
};

/**
 * Update BillingAddress by id
 * @param {ObjectId} BillingAddressId
 * @param {Object} BillingAddressBody
 * @returns {Promise<BillingAddress>}
 */
const updateBillingAddressById = async (BillingAddressId, BillingAddressBody, userId) => {
  const billingaddress = await BillingAddress.findByPk(BillingAddressId);
  if (!billingaddress) {
    throw new ApiError(httpStatus.NOT_FOUND, 'BillingAddress not found');
  }
  const { role } = await getUserById(userId);

  if (BillingAddress.UserId === userId || role === 'admin') {
    Object.assign(BillingAddress, BillingAddressBody);
    return await BillingAddress.update(BillingAddress.dataValues, { where: { id: BillingAddressId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Edit');
};

/**
 * Delete BillingAddress by id
 * @param {ObjectId} BillingAddressId
 * @returns {Promise<BillingAddress>}
 */
const deleteBillingAddressById = async (BillingAddressId, userId) => {
  
  const billingaddress = await BillingAddress.findByPk(BillingAddressId);
  if (!billingaddress) {
    throw new ApiError(httpStatus.NOT_FOUND, 'BillingAddress not found');
  }

  const { role } = await getUserById(userId);
  if (BillingAddress.UserId === userId || role === 'admin') {
    return await BillingAddress.destroy({ where: { id: BillingAddressId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Delete');
};

module.exports = {
  createBillingAddress,
  getBillingAddress,
  getBillingAddressById,
  updateBillingAddressById,
  deleteBillingAddressById,
};
