import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController.js'

// Public Routes
router.post('/signin', UserController.userSignin)
router.post('/verify', UserController.verifyOTP)


export default router