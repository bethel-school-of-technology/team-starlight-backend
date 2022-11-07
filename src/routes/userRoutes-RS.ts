import { Router } from "express";
import {createUser, getUser, loginUser } from '../controllers/userController-RS'; 

const router = Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get(':id', getUser);

export default router;

