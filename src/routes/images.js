const express = require("express");
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");
// const imageValidation = require('../validations/productimage.validation');
// const validate = require('../middleware/validate');

const router = express.Router();

router
  .route('/')
  .get(homeController.getHome);

router
  .route('/upload')
  .post( upload.single("file"), uploadController.uploadFiles)
module.exports = router;