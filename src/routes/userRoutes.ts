import { Router } from "express";
import {crc, createUser, getUser, loginUser } from '../controllers/userController'; 

const router = Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get(':id', getUser);

router.post('/crc', crc)

export default router;

