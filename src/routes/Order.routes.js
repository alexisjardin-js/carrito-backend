import express from 'express';
import { getOrders, addOrder } from '../controllers/Order.controller.js';

//enrutador
const router = express.Router();

//rutas peticiones http
router.get('/', getOrders);
router.post('/', addOrder);

export default router;
