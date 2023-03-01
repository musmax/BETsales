const { variationoptionService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createVariationOption = catchAsync(async (req, res) => {
  logger.info(req.userId);
  const userId = req.userId;
  const VariationOption = await variationoptionService.createVariationOption(userId, req.body);
  res.status(httpStatus.CREATED).json(VariationOption);
});

const updateVariationOption = catchAsync(async (req, res) => {
 await variationoptionService.updateVariationOptionById(req.params.VariationOptionId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getVariationOptions = catchAsync(async (req, res) => {
  const VariationOptions = await variationoptionService.getVariationOptions(); 
  res.status(httpStatus.OK).json(VariationOptions);
});


const getVariationOptionById = catchAsync(async (req, res) => {
  const VariationOption = await variationoptionService.getVariationOptionById(req.params.VariationOptionId);
  res.status(httpStatus.OK).json(VariationOption);
});

const deleteVariationOptionById = catchAsync(async (req, res) => {
  const VariationOption = await variationoptionService.deleteVariationOptionById(req.params.VariationOptionId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createVariationOption,
  getVariationOptions,
  getVariationOptionById,
  deleteVariationOptionById,
  updateVariationOption,
};
