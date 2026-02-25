
import express from "express";
import GenereModel from '../models/Genere.js';

class genereController {
  constructor(){
    
  }



 async createGenere(req, res) {
   try {

        const data = await GenereModel.create(req.body);
        res.status(201).json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
    }  
  async getAllGeneres(req, res) {
    try {
        const data = await GenereModel.getAll();
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async getOneGenere(req, res) {  
    try {
      const { id } = req.params;
      const data = await GenereModel.getOneGenere(id);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async updateGenere(req, res) {
     try {
      const { id } = req.params;
      const data = await GenereModel.updateGenere(id, req.body);  
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async deleteGenere(req, res) {
      try {
        const { id } = req.params;
        const data = await GenereModel.deleteGenere(id);
        res.status(206).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
}
export default new genereController();