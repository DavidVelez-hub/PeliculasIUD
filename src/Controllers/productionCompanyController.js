
import express from "express";
import ProductionCompanyModel from "../models/ProductionCompany.js";

class productionCompanyController {
  constructor(){
    
  }

  async createProductionCompany(req, res) {
   try {
        const data = await ProductionCompanyModel.create(req.body);
        res.status(201).json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
    }  
  async getAllProductionCompanies(req, res) {
    try {
        const data = await ProductionCompanyModel.getAll();
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
  async getOneProductionCompany(req, res) {
    try {
      const { id } = req.params;
      const data = await ProductionCompanyModel.getOneProductionCompany(id);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
  async updateProductionCompany(req, res) {
     try {
      const { id } = req.params;
      const data = await ProductionCompanyModel.updateProductionCompany(id, req.body);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
  async deleteProductionCompany(req, res) {
      try {
        const { id } = req.params;
        const data = await ProductionCompanyModel.deleteProductionCompany(id);
        res.status(206).json({data});
    } catch (e) {
        res.status(500).send(e.message);
        }
        }


}
export default new productionCompanyController();