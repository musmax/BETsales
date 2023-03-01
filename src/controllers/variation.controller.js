const { variationService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createVariation = catchAsync(async (req, res) => {
  logger.info(req.userId);
  const userId = req.userId;
  const Variation = await variationService.createVariation(req.body);
  res.status(httpStatus.CREATED).json(Variation);
});

const updateVariation = catchAsync(async (req, res) => {
 await variationService.updateVariationById(req.params.VariationId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getVariations = catchAsync(async (req, res) => {
  const Variations = await variationService.getVariations(); 
  res.status(httpStatus.OK).json(Variations);
});


const getVariationById = catchAsync(async (req, res) => {
  const Variation = await variationService.getVariationById(req.params.VariationId);
  res.status(httpStatus.OK).json(Variation);
});

const deleteVariationById = catchAsync(async (req, res) => {
  const Variation = await variationService.deleteVariationById(req.params.VariationId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createVariation,
  getVariations,
  getVariationById,
  deleteVariationById,
  updateVariation,
};
