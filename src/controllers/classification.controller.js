const { classificationService } = require('../services');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const logger = require('../config/logger');

const createclassification = catchAsync(async (req, res) => {
  logger.info(req.userId);
  const userId = req.userId;
  console.log(req.body)
  const classification = await classificationService.createClassification(req.body);
  res.status(httpStatus.CREATED).json(classification);
  
});

const updateclassification = catchAsync(async (req, res) => {
 await classificationService.updateclassificationById(req.params.classificationId, req.body, req.userId);
  res.status(httpStatus.OK).json({ success: 'Updated' });
});

const getclassifications = catchAsync(async (req, res) => {
  const classifications = await classificationService.getClassifications(); 
  res.status(httpStatus.OK).json(classifications);
});

const getclassificationById = catchAsync(async (req, res) => {
  const classification = await classificationService.getClassificationById(req.params.classificationId);
  res.status(httpStatus.OK).json(classification);
});

const deleteclassificationById = catchAsync(async (req, res) => {
  const classification = await classificationService.deleteClassificationById(req.params.classificationId, req.userId);
  res.status(httpStatus.OK).json({ success: 'Deleted' });
});

module.exports = {
  createclassification,
  getclassifications,
  getclassificationById,
  deleteclassificationById,
  updateclassification,
};
