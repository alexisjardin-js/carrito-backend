import Product from '../models/Product.model.js';

//obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'no hay productos cargados' });
    }
    return res.json(products);
  } catch (error) {
    console.error('error al obtener los productos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

//Agregar Productos
export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    if (!newProduct) {
      return res.status(404).json({ message: 'campos incompletos' });
    }
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

//eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
    if (!deleteProduct) {
      return res.status(404).json({ message: 'el producto no existe' });
    }
    return res.status(201).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
