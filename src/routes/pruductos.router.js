import { Router } from 'express';

import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductsById,
  updateProductById,
} from '../controller/productos.controller.js';
import { isAdmin } from '../middleware/permisos.js';

const router= Router();
router.get('/',isAdmin,getAllProducts )

router.get('/:id',isAdmin, getProductsById)

router.post('/', addProduct)

router.put('/:id',updateProductById )

router.delete('/:id', isAdmin, deleteProductById)
export default router
