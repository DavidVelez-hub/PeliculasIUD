
import express from "express";
import MediaModel from '../models/Media.js';

class mediaController {
  constructor(){
    
  }

async createMedia(req, res) {
   try {
        const data = await MediaModel.create(req.body);
        res.status(201).json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
    }  
  async getAllMedia(req, res) {
    try {
        const data = await MediaModel.getAll();
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }
  async getOneMedia(req, res) {
    try {
      const { id } = req.params;
      const data = await MediaModel.getOneMedia(id);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  } 
  async updateMedia(req, res) {
     try {
      const { id } = req.params;
      const data = await MediaModel.updateMedia(id, req.body);
        res.status(201).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  } 
  async deleteMedia(req, res) {
      try {
        const { id } = req.params;
        const data = await MediaModel.deleteMedia(id);
        res.status(206).json({data});
    } catch (e) {
        res.status(500).send(e.message);
    }
  }     

}

export default new mediaController();