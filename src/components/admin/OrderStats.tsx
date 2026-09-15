type OrderStatsProps = {
  totalOrders: number;
  pendingOrders: number;
  processingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  cancelledOrders: number;
  totalRevenue: number;
  onFilterChange: (status: string) => void;
  activeFilter: string;
};

export default function OrderStats({
  totalOrders,
  pendingOrders,
  processingOrders,
  shippedOrders,
  deliveredOrders,
  cancelledOrders,
  totalRevenue,
  onFilterChange,
  activeFilter,
}: OrderStatsProps) {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Total Orders */}
      <button
        onClick={() => onFilterChange("All")}
        className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
          activeFilter === "All"
            ? "border-blue-500 bg-blue-50"
            : "bg-white"
        }`}
      >
        <h2 className="text-gray-500">
          Total Orders
        </h2>

        <p className="mt-2 text-4xl font-bold">
          {totalOrders}
        </p>
      </button>

      {/* Pending */}
      <button
        onClick={() => onFilterChange("Pending")}
        className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
          activeFilter === "Pending"
            ? "border-yellow-500 bg-yellow-50"
            : "bg-white"
        }`}
      >
        <h2 className="text-gray-500">
          Pending
        </h2>

        <p className="mt-2 text-4xl font-bold text-yellow-600">
          {pendingOrders}
        </p>
      </button>

      {/* Processing */}
      <button
        onClick={() => onFilterChange("Processing")}
        className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
          activeFilter === "Processing"
            ? "border-blue-500 bg-blue-50"
            : "bg-white"
        }`}
      >
        <h2 className="text-gray-500">
          Processing
        </h2>

        <p className="mt-2 text-4xl font-bold text-blue-600">
          {processingOrders}
        </p>
      </button>

      {/* Shipped */}
      <button
        onClick={() => onFilterChange("Shipped")}
        className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
          activeFilter === "Shipped"
            ? "border-purple-500 bg-purple-50"
            : "bg-white"
        }`}
      >
        <h2 className="text-gray-500">
          Shipped
        </h2>

        <p className="mt-2 text-4xl font-bold text-purple-600">
          {shippedOrders}
        </p>
      </button>

      {/* Delivered */}
      <button
        onClick={() => onFilterChange("Delivered")}
        className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
          activeFilter === "Delivered"
            ? "border-green-500 bg-green-50"
            : "bg-white"
        }`}
      >
        <h2 className="text-gray-500">
          Delivered
        </h2>

        <p className="mt-2 text-4xl font-bold text-green-600">
          {deliveredOrders}
        </p>
      </button>

      {/* Cancelled */}
      <button
        onClick={() => onFilterChange("Cancelled")}
        className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
          activeFilter === "Cancelled"
            ? "border-red-500 bg-red-50"
            : "bg-white"
        }`}
      >
        <h2 className="text-gray-500">
          Cancelled
        </h2>

        <p className="mt-2 text-4xl font-bold text-red-600">
          {cancelledOrders}
        </p>
      </button>

      {/* Revenue */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-2 lg:col-span-3">
        <h2 className="text-gray-500">
          Total Revenue
        </h2>

        <p className="mt-2 text-4xl font-bold text-blue-600">
          KSh {totalRevenue.toLocaleString()}
        </p>
      </div>

    </div>
  );
}