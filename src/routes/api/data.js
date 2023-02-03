import express from 'express';
import {createdData,allNation,allDayOfWeek,allGame,allGameType,allItem,allItemPrice,allItemQty,allTimePlay,allPlayToEarn,allScore} from '../../controllers/data'

const router = express.Router();

router.post('/create-data',createdData)
router.get('/all-nation',allNation)
router.get('/all-dayofweek',allDayOfWeek)
router.get('/all-game',allGame)
router.get('/all-gametype',allGameType)
router.get('/all-item',allItem)
router.get('/all-item-price',allItemPrice)
router.get('/all-item-qty',allItemQty)
router.get('/all-timeplay',allTimePlay)
router.get('/all-play-to-earn',allPlayToEarn)
router.get('/all-score',allScore)

module.exports = router;