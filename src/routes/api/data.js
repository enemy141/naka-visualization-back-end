import express from 'express';
import {createdData,allUsername,allNation,allGame,allPlayToEarn,transactionCount,transactionCountByDate,usernameCount,allGameTimePlay,getGameplayDate,getTransactionHistory} from '../../controllers/data'

const router = express.Router();

router.post('/create-data',createdData)
router.post('/transaction-date',transactionCountByDate)
router.get('/transaction-count',transactionCount)
router.get('/username-count',usernameCount)
router.get('/transaction-history',getTransactionHistory)
router.get('/all-username',allUsername)
router.get('/all-nation',allNation)
router.get('/all-game',allGame)
router.get('/all-gameplay-date',getGameplayDate)
router.get('/all-play-to-earn',allPlayToEarn)
router.get('/all-timeplay',allGameTimePlay)

module.exports = router;