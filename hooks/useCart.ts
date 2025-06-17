"use client";

import { CartItem } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  // Get total items count (including quantities)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Get unique items count (number of different products)
  const uniqueItemsCount = cart.length;

  // Remove all items from cart
  const clearCart = () => {
    setCart([]);
  };

  // Remove specific item from cart
  const removeItem = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }

    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Add item to cart
  const addToCart = (item: CartItem) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (existingItem) {
      // Update quantity if item already exists in cart
      updateQuantity(item.product.id, existingItem.quantity + item.quantity);
    } else {
      // Add new item to cart
      setCart([...cart, item]);
    }
  };

  // Increase quantity
  const increaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  // Decrease quantity
  const decreaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  return {
    cart,
    totalPrice,
    totalItems,
    uniqueItemsCount,
    clearCart,
    removeItem,
    updateQuantity,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  };
};
