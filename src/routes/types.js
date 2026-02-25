import express from 'express';
const route = express.Router();
import typeController from '../controllers/typeController.js';


route.get('/', typeController.getAllTypes);
route.get('/:id', typeController.getOneType);
route.post('/', typeController.createType);
route.put('/:id', typeController.updateType);
route.delete('/:id', typeController.deleteType);

export default route;