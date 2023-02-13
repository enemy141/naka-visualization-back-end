import express from 'express';
import {createdData,allNation,allDayOfWeek,allGame,allGameType,allItem,allItemPrice,allItemQty,allTimePlay,allPlayToEarn,allScore,transactionCount,usernameCount,allGameTimePlay,getGameplayDate} from '../../controllers/data'

const router = express.Router();

router.post('/create-data',createdData)
router.get('/transaction-count',transactionCount)
router.get('/username-count',usernameCount)
router.get('/all-nation',allNation)
router.get('/all-game',allGame)
router.get('/all-gameplay-date',getGameplayDate)
router.get('/all-play-to-earn',allPlayToEarn)
router.get('/all-timeplay',allGameTimePlay)

module.exports = router;