type OrderStatusProps = {
  id: number;
  status:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled";
  updateOrderStatus: (
    id: number,
    status:
      | "Pending"
      | "Processing"
      | "Shipped"
      | "Delivered"
      | "Cancelled"
  ) => void;
};

export default function OrderStatus({
  id,
  status,
  updateOrderStatus,
}: OrderStatusProps) {
  const getStatusColor = () => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";

      case "Processing":
        return "bg-blue-100 text-blue-800";

      case "Shipped":
        return "bg-purple-100 text-purple-800";

      case "Delivered":
        return "bg-green-100 text-green-800";

      case "Cancelled":
        return "bg-red-100 text-red-800";

      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <span
        className={`rounded-full px-4 py-2 text-sm font-bold ${getStatusColor()}`}
      >
        {status}
      </span>

      <div className="mt-8 border-t pt-6">
        <label className="mb-2 block font-semibold">
          Update Order Status
        </label>

        <select
  value={status}
  onChange={(e) => {
    const newStatus =
      e.target.value as OrderStatusProps["status"];

    if (
      newStatus === "Cancelled" &&
      status !== "Cancelled"
    ) {
      const confirmed = window.confirm(
        "Cancel this order? The purchased items will be returned to stock."
      );

      if (!confirmed) return;
    }

    updateOrderStatus(id, newStatus);
  }}
  className="rounded-xl border px-4 py-3"
>
  <option value="Pending">Pending</option>
  <option value="Processing">Processing</option>
  <option value="Shipped">Shipped</option>
  <option value="Delivered">Delivered</option>
  <option value="Cancelled">Cancelled</option>
</select>
      </div>
    </>
  );
}