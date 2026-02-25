import express from 'express';
const route = express.Router();
import productionCompanyController from '../controllers/productionCompanyController.js';


route.get('/', productionCompanyController.getAllProductionCompanies);
route.get('/:id', productionCompanyController.getOneProductionCompany);
route.post('/', productionCompanyController.createProductionCompany);
route.put('/:id', productionCompanyController.updateProductionCompany);
route.delete('/:id', productionCompanyController.deleteProductionCompany); 

export default route;