type BrandFilterProps = {
  brand: string;
  setBrand: (brand: string) => void;
};

const brands = [
  "All",
  "Nike",
  "Adidas",
  "Puma",
  "New Balance",
];

export default function BrandFilter({
  brand,
  setBrand,
}: BrandFilterProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {brands.map((item) => (
        <button
          key={item}
          onClick={() => setBrand(item)}
          className={`rounded-xl px-5 py-2.5 font-medium transition-all duration-300 ${
            brand === item
              ? "bg-navy text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 hover:border-navy hover:text-navy"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}