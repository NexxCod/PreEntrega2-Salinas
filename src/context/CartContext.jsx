import { createContext, useContext, useState } from 'react';

// Crea el contexto del carrito
const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);

// Proveedor del carrito que envuelve a los componentes que necesitan acceso al carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addItemToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya está en el carrito, aumenta su cantidad
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Si el producto no está en el carrito, lo agrega con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeItemFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Elimina productos con cantidad 0
    );
  };

  // Función para obtener la cantidad total de productos en el carrito
  const getTotalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calcula el precio total del carrito
  const getTotalPrice = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Estado y funciones a proveer a través del contexto
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, getTotalItems, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
