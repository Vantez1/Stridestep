type CategoryFilterProps = {
  category: string;
  setCategory: (category: string) => void;
};

const categories = [
  "All",
  "Running",
  "Lifestyle",
  "Casual",
];

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
            category === item
              ? "bg-amber-brand text-white shadow-lg shadow-amber-brand/30"
              : "bg-white text-slate-700 shadow hover:-translate-y-1 hover:bg-slate-100"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}