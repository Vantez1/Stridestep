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

  stockRestored?: boolean;

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
  const [statusFilter, setStatusFilter] = useState("All");

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


  const currentOrder = orders.find(
    (order) => order.id === id
  );

  if (!currentOrder) return;

  // Restore stock when an order is cancelled
  if (
    status === "Cancelled" &&
    currentOrder.status !== "Cancelled" &&
    !currentOrder.stockRestored
  ) {
    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const updatedProducts = savedProducts.map(
      (product: any) => {
        const orderedItem = currentOrder.items?.find(
          (item) => item.id === product.id
        );

        if (!orderedItem) return product;

        return {
          ...product,
          stock:
            product.stock + orderedItem.quantity,
        };
      }
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setOrders(
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              status,
              stockRestored: true,
            }
          : order
      )
    );

    return;
  }

  setOrders(
    orders.map((order) =>
      order.id === id
        ? {
            ...order,
            status,
          }
        : order
    )
  );
};

const deleteOrder = (id: number) => {
  const confirmed = window.confirm(
    "Are you sure you want to permanently delete this order?"
  );

  if (!confirmed) return;

  setOrders(
    orders.filter((order) => order.id !== id)
  );
};

  const pendingOrders = orders.filter(
  (order) => order.status === "Pending"
).length;

const processingOrders = orders.filter(
  (order) => order.status === "Processing"
).length;

const shippedOrders = orders.filter(
  (order) => order.status === "Shipped"
).length;

const deliveredOrders = orders.filter(
  (order) => order.status === "Delivered"
).length;

const cancelledOrders = orders.filter(
  (order) => order.status === "Cancelled"
).length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const filteredOrders = orders.filter((order) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    order.customer.toLowerCase().includes(searchText) ||
    order.id.toString().includes(searchText) ||
    (order.orderNumber ?? "")
      .toLowerCase()
      .includes(searchText) ||
    (order.email ?? "")
      .toLowerCase()
      .includes(searchText) ||
    (order.phone ?? "")
      .toLowerCase()
      .includes(searchText);

  const matchesStatus =
    statusFilter === "All" ||
    order.status === statusFilter;

  return matchesSearch && matchesStatus;
});

  return (
      <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="mb-10 text-4xl font-bold">
        Customer Orders
      </h1>

  <OrderStats
  totalOrders={orders.length}
  pendingOrders={pendingOrders}
  processingOrders={processingOrders}
  shippedOrders={shippedOrders}
  deliveredOrders={deliveredOrders}
  cancelledOrders={cancelledOrders}
  totalRevenue={totalRevenue}
  onFilterChange={setStatusFilter}
  activeFilter={statusFilter}
/>

{/* Search & Filter */}
<div className="mb-8 grid gap-4 md:grid-cols-3">

  <input
    type="text"
    placeholder="Search customer, order ID, email or phone..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="rounded-xl border p-3 md:col-span-2"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="rounded-xl border p-3"
  >
    <option value="All">All Orders</option>
    <option value="Pending">Pending</option>
    <option value="Processing">Processing</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    <option value="Cancelled">Cancelled</option>
  </select>

</div>

      {/* Orders Table */}
      <div className="space-y-8">

      {filteredOrders.map((order) => (
       <OrderCard
  key={order.id}
  order={order}
  updateOrderStatus={updateOrderStatus}
  deleteOrder={deleteOrder}
/>
))}
</div>

</div>

);
}
