import { Router } from 'express';
import ServicesController from '../controllers/ServicesController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ServicesController.create);
router.get('/', loginRequired, ServicesController.index);
router.put('/:id', loginRequired, ServicesController.update);
router.get('/:id', loginRequired, ServicesController.show);
router.delete('/:id', loginRequired, ServicesController.delete);

export default router;
