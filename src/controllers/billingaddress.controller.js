const { billingaddressService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createBillingAddress = catchAsync(async (req, res) => {
  
    logger.info(req.userId);
    const userId = req.userId;
    const BillingAddress = await billingaddressService.createBillingAddress(req.body)
    res.status(httpStatus.CREATED).json(BillingAddress);
  
});

const updateBillingAddress = catchAsync(async (req, res) => {
 await billingaddressService.updateBillingAddressById(req.params.BillingAddressId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getBillingAddresss = catchAsync(async (req, res) => {
  const BillingAddresss = await billingaddressService.getBillingAddresss(); 
  res.status(httpStatus.OK).json(BillingAddresss);
});


const getBillingAddressById = catchAsync(async (req, res) => {
  const BillingAddress = await billingaddressService.getBillingAddressById(req.params.BillingAddressId);
  res.status(httpStatus.OK).json(BillingAddress);
});

const deleteBillingAddressById = catchAsync(async (req, res) => {
  const BillingAddress = await billingaddressService.deleteBillingAddressById(req.params.BillingAddressId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createBillingAddress,
  getBillingAddresss,
  getBillingAddressById,
  deleteBillingAddressById,
  updateBillingAddress,
};
