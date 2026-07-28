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
};

export default function OrderCard({
  order,
  updateOrderStatus,
}: OrderCardProps) {
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
    </div>
  );
}