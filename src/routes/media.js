import express from 'express';
const route = express.Router();
import mediaController from '../controllers/mediaController.js';


route.get('/', mediaController.getAllMedia);
route.get('/:id', mediaController.getOneMedia);
route.post('/', mediaController.createMedia);
route.put('/:id', mediaController.updateMedia);
route.delete('/:id', mediaController.deleteMedia);

export default route;