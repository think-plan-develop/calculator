
import express from 'express';
import CalculaterController from '../controllers/calculatorController.js';
import HistoryController from '../controllers/historyController.js';
import validateAPIToken from '../middleware/apiTokenValidation.js'

const router = express.Router();

router.post('/',validateAPIToken, CalculaterController.getCalculationResult);
router.get('/history/:id',validateAPIToken, HistoryController.getSingleHistory);
router.get('/history',validateAPIToken, HistoryController.getAllHistory);
router.patch('/history/:id',validateAPIToken,HistoryController.clearSingleHistory);
router.patch('/history',validateAPIToken,HistoryController.clearAllHistory);

export default router;
