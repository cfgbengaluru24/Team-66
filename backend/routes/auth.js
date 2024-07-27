import express from 'express';
const router = express.Router();

// Import controllers
import {
    sendOTP,
    signUp,
    login
} from '../controllers/SchoolAuth.js';

/* Routes */
router.post('/school/sendOTP', sendOTP);
router.post('/school/signUp', signUp);
router.post('/school/login', login);


export default router;