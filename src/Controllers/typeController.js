
import express from "express";
import TypeModel from '../models/Type.js';

class directorController {
  constructor(){
    
  }

 async createType(req, res) {
   try {

        const data = await TypeModel.create(req.body);
        res.status(201).json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
    }  
  async getAllTypes(req, res) {
    try {
        const data = await TypeModel.getAll();
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async getOneType(req, res) {  
    try {
      const { id } = req.params;
      const data = await TypeModel.getOneType(id);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async updateType(req, res) {
     try {
      const { id } = req.params;
      const data = await TypeModel.updateType(id, req.body);  
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async deleteType(req, res) {
      try {
        const { id } = req.params;
        const data = await TypeModel.deleteType(id);
        res.status(206).json({data});
        } catch (e) {
          res.status(500).send(e.message);
          }
          }

        }
export default new directorController();