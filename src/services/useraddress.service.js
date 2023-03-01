const { UserAddress } = require('../models/UserAddress');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const logger = require('../config/logger');
const { getUserById } = require('./user.service');



const createUserAddress = async ( UserAddressBody) => {
  UserAddressBody['UserId'];
    return await UserAddress.create(UserAddressBody);
  }

/**
 * Get all UserAddress
 * @returns {Promise<BillingAddress>}
 */
const getUserAddress = async () => {
  return await UserAddress.findAll();
};

/**
 * Get UserAddress by id
 * @param {ObjectId} UserAddressId
 * @returns {Promise<UserAddress>}
 */
const getUserAddressById = async (UserAddressId) => {
  const Useraddress = await UserAddress.findByPk(UserAddressId);
  if (!Useraddress) {
    throw new ApiError(httpStatus.NOT_FOUND, 'UserAddress not found');
  }
  return Useraddress;
};

/**
 * Update UserAddress by id
 * @param {ObjectId} UserAddressId
 * @param {Object} UserAddressBody
 * @returns {Promise<UserAddress>}
 */
const updateUserAddressById = async (UserAddressId, UserAddressBody, userId) => {
  const Useraddress = await UserAddress.findByPk(UserAddressId);
  if (!Useraddress) {
    throw new ApiError(httpStatus.NOT_FOUND, 'UserAddress not found');
  }
  const { role } = await getUserById(userId);

  if (UserAddress.UserId === userId || role === 'admin') {
    Object.assign(UserAddress, UserAddressBody);
    return await UserAddress.update(UserAddress.dataValues, { where: { id: UserAddressId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Edit');
};

/**
 * Delete UserAddress by id
 * @param {ObjectId} UserAddressId
 * @returns {Promise<UserAddress>}
 */
const deleteUserAddressById = async (UserAddressId, userId) => {
  
  const Useraddress = await UserAddress.findByPk(UserAddressId);
  if (!Useraddress) {
    throw new ApiError(httpStatus.NOT_FOUND, 'UserAddress not found');
  }

  const { role } = await getUserById(userId);
  if (UserAddress.UserId === userId || role === 'admin') {
    return await UserAddress.destroy({ where: { id: UserAddressId } });
  }
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Cannot Delete');
};

module.exports = {
  createUserAddress,
  getUserAddress,
  getUserAddressById,
  updateUserAddressById,
  deleteUserAddressById,
};
