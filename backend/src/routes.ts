import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OphanageController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OphanageController.index);
routes.get('/orphanages/:id', OphanageController.show);
routes.post('/orphanages', upload.array('images'),OphanageController.create);

export default routes;