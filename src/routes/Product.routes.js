import express from 'express';
import { addProduct, deleteProduct, getProducts } from '../controllers/Product.controller.js';

//enrutador
const router = express.Router();

//rutas peticiones http
router.get('/', getProducts);
router.post('/', addProduct);
router.delete('/:productId', deleteProduct);

export default router;
