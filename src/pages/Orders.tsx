 import { useEffect, useState } from "react";

interface Order {
  id: number;
  customer: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  items?: any[];
  email?: string;
  phone?: string;
  address?: string;
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

  const getStatusColor = (
    status: Order["status"]
  ) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";

      case "Processing":
        return "bg-blue-100 text-blue-800";

      case "Shipped":
        return "bg-purple-100 text-purple-800";

      case "Delivered":
        return "bg-green-100 text-green-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredOrders = orders.filter((order) => {
    return (
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id.toString().includes(search)
    );
  });

  return (
      <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="mb-10 text-4xl font-bold">
        Customer Orders
      </h1>

      {/* Statistics */}
      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="mt-2 text-4xl font-bold">
            {orders.length}
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Pending</h2>
          <p className="mt-2 text-4xl font-bold text-yellow-600">
            {pendingOrders}
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Delivered</h2>
          <p className="mt-2 text-4xl font-bold text-green-600">
            {deliveredOrders}
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="mt-2 text-4xl font-bold text-blue-600">
            KSh {totalRevenue.toLocaleString()}
          </p>
        </div>
      </div>

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
      <div className="overflow-hidden rounded-2xl border shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Change Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  #{order.id}
                </td>

                <td className="p-4">
                  {order.customer}
                </td>

                <td className="p-4">
                  KSh {order.total.toLocaleString()}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(
                        order.id,
                        e.target.value as Order["status"]
                      )
                    }
                    className="rounded-lg border p-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}