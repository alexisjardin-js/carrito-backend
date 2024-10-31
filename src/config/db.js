import mongoose from 'mongoose';

//conexion a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Base de datos MongoDB conectada...');
  } catch (error) {
    console.error('Error al conectar la Base de datos');
  }
};

export default connectDB;
