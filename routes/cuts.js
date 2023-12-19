const express = require('express');
const router = express.Router();
const cutsController = require('../controllers/cutsController');

router.get('/', cutsController.getAllCuts);
router.get('/:id', cutsController.getCutById);
router.post('/', cutsController.createCut);
router.put('/:id', cutsController.updateCut);
router.delete('/:id', cutsController.deleteCut);

module.exports = router;
