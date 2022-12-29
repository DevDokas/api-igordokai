import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = new Router();

router.get('/', HomeController.index);
router.get('/about', HomeController.index);

export default router;
