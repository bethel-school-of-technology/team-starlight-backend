import { Router } from 'express';
import { getAllMessages, createMessage, deleteMessage, getMessage, updateMessage } from '../controllers/messageController';

const router = Router();

router.get('/', getAllMessages);

router.post('/', createMessage);

router.get('/:messageId', getMessage);

router.put('/:messageId', updateMessage);

router.delete('/:messageId', deleteMessage);

export default router;