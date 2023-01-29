import * as Boom from '@hapi/boom';

import { getAllProducts } from '../controller/productos.controller.js';

export async function startSession(req, res, next) {
  try {
    res.status(200).render("partials/login", { datos: { resultado: true } });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
}

export async function endSession(req, res, next) {
  try {
    req.session.destroy((err) => {
      if (err) {
        next(Boom.notFound('No existe seccion'))
        
      }

    
    });
    getAllProducts(req,res,next);
  } catch (err) {
    
    next(Boom.notFound(err.toString()))
   
  }
}

export async function newSession(req, res, next) {
  try {
   
    const usuario = req.user;

       
        req.session.active = true;
        if (usuario.role == "admin") {
          req.session.administrador = true;
        } else {
          req.session.administrador = false;
        }
        req.session.email = usuario.email;
        req.session.name = usuario.nombre;
        res.status(200).render("partials/usuario", { usuario: usuario });
      
    
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
}
