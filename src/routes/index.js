import express from 'express';
import authRouter from './api/auth';
import userRouter from './api/users';
import dataRouter from './api/data';

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/users', userRouter);
router.use('/api/data',dataRouter);
export default router;
