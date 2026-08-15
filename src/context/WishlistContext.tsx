import {
  createContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

type WishlistItem = {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
};
export const WishlistContext =
  createContext<WishlistContextType | null>(null);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  function addToWishlist(item: WishlistItem) {
  setWishlist((prev) => {
    if (prev.some((p) => p.id === item.id)) {
      return prev;
    }

    return [...prev, item];
  });
}

  function removeFromWishlist(id: number) {
  setWishlist((prev) =>
    prev.filter((item) => item.id !== id)
  );
}
function clearWishlist() {
  setWishlist([]);
}

  function isInWishlist(id: number) {
    return wishlist.some((item) => item.id === id);
  }

  return (
    <WishlistContext.Provider
      value={{
  wishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  isInWishlist,
}}
    >
      {children}
    </WishlistContext.Provider>
  );
}