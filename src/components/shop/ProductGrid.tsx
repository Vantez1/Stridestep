import ProductCard from "../products/ProductCard";
import { products } from "../../data/products";

type ProductGridProps = {
  search: string;
  category: string;
  brand: string;
  sortBy: string;
};

 export default function ProductGrid({
  search,
  category,
  brand,
  sortBy,
}: ProductGridProps){
  const filteredProducts = products
  .filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
  category === "All" || product.category === category;

const matchesBrand =
  brand === "All" || product.brand === brand;

return matchesSearch && matchesCategory && matchesBrand;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;

      case "price-high":
        return b.price - a.price;

      case "rating":
        return b.rating - a.rating;

      case "name":
        return a.name.localeCompare(b.name);

      default:
        return 0;
    }
  });
  return (
    <div className="mt-12">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="font-display text-3xl font-black text-navy">
            Shop Collection
          </h2>

          <p className="mt-2 text-slate-500">
            {filteredProducts.length} Product
            {filteredProducts.length !== 1 ? "s" : ""} Found
          </p>
        </div>

      </div>

      {filteredProducts.length > 0 ? (

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}

        </div>

      ) : (

        <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">

          <div className="text-7xl">👟</div>

          <h3 className="mt-6 text-3xl font-bold text-slate-900">
            No Shoes Found
          </h3>

          <p className="mt-4 text-slate-500">
            Try searching for another shoe or selecting a different category.
          </p>

        </div>

      )}

    </div>
  );
}