type SortDropdownProps = {
  sortBy: string;
  setSortBy: (value: string) => void;
};

export default function SortDropdown({
  sortBy,
  setSortBy,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort"
        className="font-semibold text-slate-600"
      >
        Sort By
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-5 py-3 shadow-sm outline-none transition focus:border-amber-brand"
      >
        <option value="default">Featured</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="rating">Highest Rated</option>
        <option value="name">Name (A–Z)</option>
      </select>
    </div>
  );
}