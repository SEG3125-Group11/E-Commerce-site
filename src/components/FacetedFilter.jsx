import React from "react";

const materials = ["Bamboo", "Cotton", "Recycled", "Wool", "Hemp"];
const priceRanges = ["Under $20", "$20–$50", "$50+"];

export default function FacetedFilter({ filters, setFilters }) {
  
  const toggleMaterial = (m) =>
    setFilters((prev) => {
      const list = prev.material.includes(m)
        ? prev.material.filter((x) => x !== m)
        : [...prev.material, m];
      return { ...prev, material: list };
    });

  const setPrice = (p) =>
    setFilters((prev) => ({ ...prev, price: prev.price === p ? "" : p }));

  return (
    <aside className="w-full md:w-56 bg-white rounded shadow p-4 space-y-6">
      {/* MATERIAL */}
      <div>
        <h4 className="font-semibold mb-2">Material</h4>
        {materials.map((m) => (
          <label
            key={m}
            className="block text-sm cursor-pointer mb-1 select-none"
          >
            <input
              type="checkbox"
              checked={filters.material.includes(m)}
              onChange={() => toggleMaterial(m)}
              className="mr-2 accent-accent"
            />
            {m}
          </label>
        ))}
      </div>

      {/* PRICE */}
      <div>
        <h4 className="font-semibold mb-2">Price</h4>
        {priceRanges.map((p) => (
          <label
            key={p}
            className="block text-sm cursor-pointer mb-1 select-none"
          >
            <input
              type="radio"
              name="price"
              checked={filters.price === p}
              onChange={() => setPrice(p)}
              className="mr-2 accent-accent"
            />
            {p}
          </label>
        ))}
      </div>
    </aside>
  );
}
