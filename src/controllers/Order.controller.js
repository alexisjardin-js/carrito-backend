import Order from '../models/Orders.model.js';

//Obtener todas las ordenes
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'no hay ordenes' });
    }
    return res.json(orders);
  } catch (error) {
    console.error('Error al obtener las ordenes:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

//Agregar Order
export const addOrder = async (req, res) => {
  const { items } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'el carrito de compras esta vacio' });
  }
  try {
    const newOrder = new Order({
      items: items.map((item) => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    });
    await newOrder.save();
    return res.status(201).json({ message: 'ok', newOrder });
  } catch (error) {
    console.error('Error al crear la orden:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
