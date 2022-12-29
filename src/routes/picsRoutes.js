import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import PicsController from '../controllers/PicsController';

const router = new Router();

router.post('/', loginRequired, PicsController.store);

export default router;
