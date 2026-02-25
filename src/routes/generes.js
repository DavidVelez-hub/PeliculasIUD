import express from 'express';
const route = express.Router();
import genereController from '../controllers/genereController.js';


route.get('/', genereController.getAllGeneres);
route.get('/:id', genereController.getOneGenere);
route.post('/', genereController.createGenere);
route.put('/:id', genereController.updateGenere);
route.delete('/:id', genereController.deleteGenere);


export default route;