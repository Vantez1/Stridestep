import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "./index.css";
import App from "./App.tsx";


createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <CartProvider>
    <WishlistProvider>

      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "12px",
            background: "#0F3D5E",
            color: "#fff",
          },
        }}
      />

    </WishlistProvider>
  </CartProvider>
</StrictMode>
);
