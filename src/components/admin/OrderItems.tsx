type OrderItem = {
  id: number;
  name: string;
  brand: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
};

type OrderItemsProps = {
  items?: OrderItem[];
};

export default function OrderItems({
  items,
}: OrderItemsProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-bold">
        Products
      </h3>

      {items?.length ? (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-50 p-5"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="font-bold">
                    {item.name}
                  </h4>

                  <p className="text-slate-500">
                    {item.brand}
                  </p>
                </div>

                <p className="font-bold">
                  KSh{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-6 text-sm">
                <span>
                  <strong>Size:</strong> {item.size}
                </span>

                <span>
                  <strong>Colour:</strong> {item.color}
                </span>

                <span>
                  <strong>Qty:</strong> {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}