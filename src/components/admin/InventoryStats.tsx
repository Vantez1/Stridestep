type InventoryStatsProps = {
  totalProducts: number;
  inStock: number;
  lowStock: number;
  outOfStock: number;
  inventoryValue: number;
};

export default function InventoryStats({
  totalProducts,
  inStock,
  lowStock,
  outOfStock,
  inventoryValue,
}: InventoryStatsProps) {
  const cards = [
    {
      title: "Products",
      value: totalProducts,
      color: "text-blue-600",
    },
    {
      title: "In Stock",
      value: inStock,
      color: "text-green-600",
    },
    {
      title: "Low Stock",
      value: lowStock,
      color: "text-yellow-600",
    },
    {
      title: "Out of Stock",
      value: outOfStock,
      color: "text-red-600",
    },
    {
      title: "Inventory Value",
      value: `KSh ${inventoryValue.toLocaleString()}`,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="mb-10 grid gap-6 md:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <p className="text-slate-500">
            {card.title}
          </p>

          <h2 className={`mt-3 text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}