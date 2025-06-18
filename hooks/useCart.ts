"use client";

import { CartItem } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const uniqueItemsCount = cart.length;

  const clearCart = () => {
    setCart([]);
    location.reload();
  };

  const removeItem = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

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

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (existingItem) {
      updateQuantity(item.product.id, existingItem.quantity + item.quantity);
    } else {
      setCart([...cart, item]);
    }
    location.reload();
  };

  const increaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

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
