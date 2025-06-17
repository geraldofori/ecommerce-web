"use client";

import { CartItem } from "@/types";
import { useLocalStorage } from "./useLocalStorage";
import { useRouter } from "next/navigation";
export const useCart = () => {
  const router = useRouter();
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const uniqueItemsCount = cart.length;

  const clearCart = () => {
    setCart([]);
    router.refresh();
  };

  const removeItem = (productId: number) => {
    setCart(cart.filter((item) => item.product.id !== productId));
    router.refresh();
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
    router.refresh();
  };

  const increaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
    router.refresh();
  };

  const decreaseQuantity = (productId: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity - 1);
    }
    router.refresh();
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
