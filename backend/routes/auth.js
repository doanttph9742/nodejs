import express from 'express';
import { signup} from '../controllers/auth'
import { userSignupValidator } from "../validator";

const router = express.Router();
router.post('/signup', userSignupValidator, signup);
module.exports = router;