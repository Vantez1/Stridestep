type ProductSpecificationsProps = {
  product: {
    brand: string;
    category: string;
    stock: number;
  };
};

export default function ProductSpecifications({
  product,
}: ProductSpecificationsProps) {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h3 className="mb-6 text-2xl font-bold text-navy">
        Product Specifications
      </h3>

      <div className="divide-y divide-slate-200">

        <Specification
          label="Brand"
          value={product.brand}
        />

        <Specification
          label="Category"
          value={product.category}
        />

        <Specification
          label="Material"
          value="Premium Mesh & Rubber"
        />

        <Specification
          label="Origin"
          value="Imported"
        />

        <Specification
          label="Warranty"
          value="12 Months"
        />

        <Specification
          label="Availability"
          value={
            product.stock > 0
              ? "In Stock"
              : "Out of Stock"
          }
        />

      </div>

    </div>
  );
}

function Specification({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between py-4">

      <span className="font-medium text-slate-500">
        {label}
      </span>

      <span className="font-semibold text-navy">
        {value}
      </span>

    </div>
  );
}