import { Schema, model } from 'mongoose';

//modelo para la colección de la base de datos
const orderSchema = new Schema({
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

export default model('Order', orderSchema);
