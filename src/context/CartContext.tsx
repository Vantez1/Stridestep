import { createContext, useState } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
  setCart((currentCart) => {
    const existingItem = currentCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      return currentCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...currentCart, { ...item, quantity: 1 }];
  });
};

const removeFromCart = (id: number) => {
  setCart((currentCart) =>
    currentCart.filter((item) => item.id !== id)
  );
};

const increaseQuantity = (id: number) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id: number) => {
  setCart((currentCart) =>
    currentCart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    }}
  >     
      {children}
    </CartContext.Provider>
  );
}