import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


export default function Checkout() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available.");
  }

  const {
    cart,
    clearCart,
  } = cartContext;

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = total >= 10000 ? 0 : 500;
  const grandTotal = total + deliveryFee;

  const [paymentMethod, setPaymentMethod] = useState("mpesa");

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
    newErrors.email = "Enter a valid email address";
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Customer Details */}

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
            className="w-full rounded-xl border p-4"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName}</p>
         )}

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full rounded-xl border p-4"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
        )}

          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full rounded-xl border p-4"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}

          <textarea
            placeholder="Delivery Address"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
            className="w-full rounded-xl border p-4 h-32"
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}  
        </div>
{errors.address && (
  <p className="text-red-600 text-sm">{errors.address}</p>
)}

{/* Payment Method */}

<div className="mt-8 rounded-2xl border p-6">
  <h3 className="mt-6 text-lg font-semibold">
  Payment Method
</h3>

<div className="space-y-3">
  <label className="flex items-center gap-3">
    <input
      type="radio"
      name="payment"
      value="M-Pesa"
      checked={paymentMethod === "M-Pesa"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    M-Pesa
  </label>

  <label className="flex items-center gap-3">
    <input
      type="radio"
      name="payment"
      value="Card"
      checked={paymentMethod === "Card"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    Credit / Debit Card
  </label>

  <label className="flex items-center gap-3">
    <input
      type="radio"
      name="payment"
      value="Cash on Delivery"
      checked={paymentMethod === "Cash on Delivery"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    Cash on Delivery
  </label>
</div>
</div>

        {/* Order Summary */}

        <div className="rounded-2xl border p-6 shadow">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (
  <div
    key={`${item.id}-${item.size}-${item.color}`}
    className="mb-5 flex justify-between border-b pb-4"
  >
    <div>
      <p className="font-semibold">
        {item.name}
      </p>

      <p className="text-sm text-slate-500">
        {item.brand}
      </p>

      <p className="mt-1 text-sm text-slate-600">
        Size: <strong>{item.size}</strong>
      </p>

      <p className="text-sm text-slate-600">
        Colour: <strong>{item.color}</strong>
      </p>

      <p className="text-sm text-slate-600">
        Qty: <strong>{item.quantity}</strong>
      </p>
    </div>

    <div className="font-bold">
      KSh {(item.price * item.quantity).toLocaleString()}
    </div>
  </div>
))}

          <hr className="my-6" />

<div className="space-y-3">

  <div className="flex justify-between">
    <span>Subtotal</span>
    <span>KSh {total.toLocaleString()}</span>
  </div>

  <div className="flex justify-between">
    <span>Delivery</span>

    <span className="font-semibold">
      {deliveryFee === 0
        ? "FREE"
        : `KSh ${deliveryFee.toLocaleString()}`}
    </span>
  </div>

  <hr />

  <div className="flex justify-between text-2xl font-bold">
    <span>Grand Total</span>

    <span>
      KSh {grandTotal.toLocaleString()}
    </span>
  </div>

</div>

<button
 onClick={() => {
  if (!validateForm()) return;

  const existingOrders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );

  const newOrder = {
    id: Date.now(),
    customer: form.fullName,
    total: grandTotal,
    paymentMethod,
    status: "Pending" as const,
    items: cart,
    email: form.email,
    phone: form.phone,
    address: form.address,
    createdAt: new Date().toLocaleString(),
  };

  console.log("Saving order...", newOrder);

  localStorage.setItem(
    "orders",
    JSON.stringify([...existingOrders, newOrder])
  );

 console.log("Orders after save:", localStorage.getItem("orders"));

const savedProducts = JSON.parse(
  localStorage.getItem("products") || "null"
) ?? [];

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

  navigate("/order-success");
}}
  className="mt-8 w-full rounded-xl bg-green-600 py-4 text-white font-semibold hover:bg-green-700 transition"
>
  Place Order
</button>

<p className="mt-4 text-center text-sm text-slate-500">
  🔒 Your payment information is securely processed.
</p>

        </div>

      </div>
    </div>
  );
}