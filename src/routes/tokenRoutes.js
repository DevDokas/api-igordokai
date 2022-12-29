import { Router } from 'express';
import TokenController from '../controllers/TokenController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.post('/user', TokenController.create);

export default router;
