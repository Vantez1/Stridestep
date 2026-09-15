import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { CartContext } from "../context/CartContext";

import CheckoutHero from "../components/checkout/CheckoutHero";
import CheckoutForm from "../components/checkout/CheckoutForm";
import PaymentMethod from "../components/checkout/PaymentMethod";
import OrderSummary from "../components/checkout/OrderSummary";
import OrderTotals from "../components/checkout/OrderTotals";
import PlaceOrderButton from "../components/checkout/PlaceOrderButton";

export default function Checkout() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available.");
  }

  const { cart, clearCart } = cartContext;

  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal >= 10000 ? 0 : 500;

  const grandTotal = subtotal + deliveryFee;

  const [loading, setLoading] = useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("M-Pesa");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    };

    let valid = true;

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = "Delivery address is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };
    const handlePlaceOrder = () => {
    if (!validateForm()) return;

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const existingOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      const orderNumber =
        "SS-" +
        new Date().getFullYear() +
        "-" +
        Math.floor(100000 + Math.random() * 900000);

      const newOrder = {
        id: Date.now(),
        orderNumber,
        customer: form.fullName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        paymentMethod,
        total: grandTotal,
        status: "Pending" as const,
        items: cart,
        createdAt: new Date().toLocaleString(),
      };

      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, newOrder])
      );

      localStorage.setItem(
        "latestOrder",
         JSON.stringify(newOrder)
      );

      const savedProducts =
        JSON.parse(localStorage.getItem("products") || "[]");

      const updatedProducts = savedProducts.map((product: any) => {
        const purchasedItem = cart.find(
          (item) => item.id === product.id
        );

        if (!purchasedItem) return product;

        return {
          ...product,
          stock: Math.max(
            0,
            product.stock - purchasedItem.quantity
          ),
        };
      });

      localStorage.setItem(
        "products",
        JSON.stringify(updatedProducts)
      );

      clearCart();

      toast.success("Order placed successfully!");

      setLoading(false);

      navigate("/order-success");
    }, 1500);
  };
    return (
    <>
      <CheckoutHero />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <CheckoutForm
            form={form}
            setForm={setForm}
            errors={errors}
          />

          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

        </div>

        {/* Right Side */}
        <div className="lg:sticky lg:top-28 h-fit">

          <OrderSummary
            cart={cart}
          />

          <OrderTotals
            subtotal={subtotal}
          />

          <PlaceOrderButton
            loading={loading}
            onClick={handlePlaceOrder}
          />

        </div>

      </div>
    </>
  );
}