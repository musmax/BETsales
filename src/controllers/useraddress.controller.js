const { useraddressService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createUserAddress = catchAsync(async (req, res) => {
  logger.info(req.userId);
  const userId = req.userId;
  const UserAddress = await useraddressService.createUserAddress( req.body);
  res.status(httpStatus.CREATED).json(UserAddress);
});

const updateUserAddressById = catchAsync(async (req, res) => {
 await useraddressService.updateUserAddressById(req.params.UserAddressId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getUserAddresss = catchAsync(async (req, res) => {
  const UserAddresss = await useraddressService.getUserAddresss(); 
  res.status(httpStatus.OK).json(UserAddresss);
});


const getUserAddressById = catchAsync(async (req, res) => {
  const UserAddress = await useraddressService.getUserAddressById(req.params.UserAddressId);
  res.status(httpStatus.OK).json(UserAddress);
});

const deleteUserAddressById = catchAsync(async (req, res) => {
  const UserAddress = await useraddressService.deleteUserAddressById(req.params.UserAddressId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createUserAddress,
  getUserAddresss,
  getUserAddressById,
  deleteUserAddressById,
  updateUserAddressById,
};
