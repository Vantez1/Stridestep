import { Search } from "lucide-react";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="relative">

      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search by shoe name or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-5
          pl-14
          pr-5
          text-lg
          shadow-lg
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-400
          focus:border-amber-brand
          focus:ring-4
          focus:ring-amber-brand/20
        "
      />

    </div>
  );
}