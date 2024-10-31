import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import ProductRoutes from './src/routes/Product.routes.js';
import OrderRoutes from './src/routes/Order.routes.js';

//base de datos
connectDB();

const app = express();

//crear middlewares
app.use(express.json()); //permite procesar cuerpos de solicitudes
app.use(morgan('dev')); //muestra peticiones en el servidor

//configuracion de CORS
const origenesPermitidos = ['http://127.0.0.1:5500'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || origenesPermitidos.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Cliente no permitido'));
    }
  },
};

app.use(cors(corsOptions));

//configuracion del puerto
const PORT = process.env.PORT || 5000;

//rutas
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

//ponemos en escucha el servidor
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
