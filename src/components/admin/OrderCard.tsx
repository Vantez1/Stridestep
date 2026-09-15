import { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import OrderItems from "./OrderItems";
import OrderStatus from "./OrderStatus";

type Order = {
  id: number;
  orderNumber?: string;
  customer: string;
  total: number;
  status:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled";
  items?: {
    id: number;
    name: string;
    brand: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
  }[];
  email?: string;
  phone?: string;
  address?: string;
  paymentMethod?: string;
  createdAt?: string;
};

type OrderCardProps = {
  order: Order;
  updateOrderStatus: (
    id: number,
    status: Order["status"]
  ) => void;
  deleteOrder: (id: number) => void;
};

export default function OrderCard({
  order,
  updateOrderStatus,
  deleteOrder,
}: OrderCardProps) {

  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-lg">

      <div className="flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            {order.orderNumber ?? `#${order.id}`}
          </h2>

          {order.createdAt && (
            <p className="mt-1 text-slate-500">
              {order.createdAt}
            </p>
          )}
        </div>

        <OrderStatus
          id={order.id}
          status={order.status}
          updateOrderStatus={updateOrderStatus}
        />
      </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-xl border px-4 py-2 font-semibold transition hover:bg-slate-50"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

{order.status !== "Cancelled" && (
  <button
    onClick={() => {
      const confirmed = window.confirm(
        "Are you sure you want to cancel this order?"
      );

      if (!confirmed) return;

      updateOrderStatus(order.id, "Cancelled");
    }}
    className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
  >
    Cancel Order
  </button>
)}

<button
  onClick={() => deleteOrder(order.id)}
  className="rounded-xl bg-slate-800 px-4 py-2 font-semibold text-white transition hover:bg-slate-900"
>
  Delete Order
</button>

            {showDetails && (
        <>
          <CustomerDetails
            customer={order.customer}
            phone={order.phone}
            email={order.email}
            address={order.address}
            paymentMethod={order.paymentMethod}
            total={order.total}
          />

          <OrderItems
            items={order.items}
          />
        </>
      )}
    </div>
  );
}