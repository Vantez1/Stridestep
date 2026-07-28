import { useEffect, useState } from "react";
import OrderStats from "../components/admin/OrderStats";
import OrderCard from "../components/admin/OrderCard";
interface Order {
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
}

export default function Orders() {
  const [search, setSearch] = useState("");

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("orders");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: 1001,
        customer: "John Doe",
        total: 14999,
        status: "Pending",
      },
      {
        id: 1002,
        customer: "Mary Wanjiku",
        total: 18499,
        status: "Processing",
      },
      {
        id: 1003,
        customer: "David Kimani",
        total: 12999,
        status: "Delivered",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const updateOrderStatus = (
    id: number,
    status: Order["status"]
  ) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const filteredOrders = orders.filter((order) => {
  const searchText = search.toLowerCase();

  return (
    order.customer.toLowerCase().includes(searchText) ||
    order.id.toString().includes(searchText) ||
    (order.orderNumber ?? "")
      .toLowerCase()
      .includes(searchText)
  );
});

  return (
      <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="mb-10 text-4xl font-bold">
        Customer Orders
      </h1>

      <OrderStats
    totalOrders={orders.length}
    pendingOrders={pendingOrders}
    deliveredOrders={deliveredOrders}
    totalRevenue={totalRevenue}
/>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search customer or order ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Orders Table */}
      <div className="space-y-8">

      {filteredOrders.map((order) => (
        <OrderCard
           key={order.id}
           order={order}
          updateOrderStatus={updateOrderStatus}
  />
))}
</div>

</div>

);
}
