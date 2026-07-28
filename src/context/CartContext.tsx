import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantity">,
    quantity?: number
  ) => void;

  removeFromCart: (
    id: number,
    size: string,
    color: string
  ) => void;

  increaseQuantity: (
    id: number,
    size: string,
    color: string
  ) => void;

  decreaseQuantity: (
    id: number,
    size: string,
    color: string
  ) => void;

  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");

  if (savedCart) {
    return JSON.parse(savedCart);
  }

  return [];
});


  const addToCart = (
  item: Omit<CartItem, "quantity">,
  quantity = 1
) => {

  setCart((currentCart) => {
    const existingItem = currentCart.find(
  (cartItem) =>
    cartItem.id === item.id &&
    cartItem.size === item.size &&
    cartItem.color === item.color
);

    if (existingItem) {
  return currentCart.map((cartItem) =>
    cartItem.id === item.id &&
    cartItem.size === item.size &&
    cartItem.color === item.color
      ? {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
        }
      : cartItem
  );
}

    return [...currentCart, { ...item, quantity }];
  });
};

const removeFromCart = (
  id: number,
  size: string,
  color: string
) => {
  setCart((currentCart) =>
    currentCart.filter(
      (item) =>
        !(
          item.id === id &&
          item.size === size &&
          item.color === color
        )
    )
  );
};

const increaseQuantity = (
  id: number,
  size: string,
  color: string
) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === id &&
      item.size === size &&
      item.color === color
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (
  id: number,
  size: string,
  color: string
) => {
  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id &&
        item.size === size &&
        item.color === color
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

const clearCart = () => {
  setCart([]);
};

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  return (
    <CartContext.Provider
      value={{
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}}
  >     
      {children}
    </CartContext.Provider>
  );
}