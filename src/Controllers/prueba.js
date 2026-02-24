
import express from "express";
class directorController {
  constructor() {}

  async getAllDirectors(req, res) {
    try {
        res.status(201).json({status: 'get-OK'}); 
    } catch (e) {
        res.status(500).send(e.message);
    }
  }

  async create(req, res) {
    try {
      res.status(200).json({ status: 'Director creado correctamente' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
    
  }

  async update(req, res) {
    try {
      res.status(200).json({ status: 'Director actualizado correctamente' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async delete(req, res) {
    try {
      res.status(200).json({ status: 'Director eliminado correctamente' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

 

  async getOne(req, res) {
    try {
      res.status(200).json({ status: 'Director obtenido correctamente' });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

}

export default new directorController();