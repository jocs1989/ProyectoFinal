import { Router } from 'express';

import {
  agregarProductoCarrito,
  borrarCarrito,
  borrarProductoCarrito,
  mostrarCarrito,
  mostrarCarritoOrden,
  nuevoCarrito,
} from '../controller/carrito.controller.js';
import { isAdmin } from '../middleware/permisos.js';

const router = Router()
//routes
router.post('/', nuevoCarrito)
router.delete('/:id',isAdmin, borrarCarrito)
router.get('/orden',mostrarCarritoOrden)
router.get('/:id/productos',mostrarCarrito )

router.post('/:id/productos',agregarProductoCarrito )
router.delete('/:id/productos/:id_prod',isAdmin, borrarProductoCarrito)

export default router
