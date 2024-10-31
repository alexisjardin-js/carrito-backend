import { Schema, model } from 'mongoose';

//modelo para la colección de la base de datos
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
});

export default model('Product', productSchema);
