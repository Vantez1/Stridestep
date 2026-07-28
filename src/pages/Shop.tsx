import { useState } from "react";

import Hero from "../components/shop/Hero";
import SearchBar from "../components/shop/SearchBar";
import CategoryFilter from "../components/shop/CategoryFilter";
import ProductGrid from "../components/shop/ProductGrid";
import SortDropdown from "../components/shop/SortDropdown";
import BrandFilter from "../components/shop/BrandFilter";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  return (
    <>
      <Hero />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SearchBar
  search={search}
  setSearch={setSearch}
/>

<CategoryFilter
  category={category}
  setCategory={setCategory}
/>

<BrandFilter
  brand={brand}
  setBrand={setBrand}
/>

<div className="mt-8 flex justify-end">
  <SortDropdown
    sortBy={sortBy}
    setSortBy={setSortBy}
  />
</div>

<ProductGrid
  search={search}
  category={category}
  brand={brand}
  sortBy={sortBy}
/>
        </div>
      </section>
    </>
  );
}