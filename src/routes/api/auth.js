import exporess from 'express';
import auth from '../../middleware/jwtVerify';
import { logoutAll, logout, login, verifyToken } from '../../controllers/auth';

const router = exporess.Router();

/**
 * @route   POST /auth/login
 * @desc    Login a user
 * @access  Public
 */
router.post('/login', login);

/**
 * @route   POST /auth/logout
 * @desc    Logout a user
 * @access  Private
 */
router.post('/logout', auth, logout);

/**
 * @route   POST /auth/logoutAll
 * @desc    Logout a user from all devices
 * @access  Private
 */
router.post('/logoutAll', auth, logoutAll);

router.post('/verify',auth,verifyToken);

export default router;
