import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import allItems from "../data/items";
import FacetedFilter from "../components/FacetedFilter";

const sortFns = {
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  "name-asc": (a, b) => a.name.localeCompare(b.name),
};

export default function CategoryPage() {
  /* ------------ route & base data ------------ */
  const { name } = useParams();
  const navigate = useNavigate();
  const formattedCategory = name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const baseProducts = allItems.filter(
    (p) => p.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  /* ------------ filter + sort state ---------- */
  const [filters, setFilters] = useState({ material: [], price: "" });
  const [sortBy, setSortBy] = useState("price-asc");

  /* ------------ derived list ----------------- */
  const filteredProducts = useMemo(() => {
    return baseProducts
      .filter((p) =>
        filters.material.length
          ? filters.material.some((m) =>
              p.description.toLowerCase().includes(m.toLowerCase())
            )
          : true
      )
      .filter((p) => {
        const price = p.price;
        if (filters.price === "Under $20") return price < 20;
        if (filters.price === "$20–$50") return price >= 20 && price <= 50;
        if (filters.price === "$50+") return price > 50;
        return true;
      })
      .sort(sortFns[sortBy]);
  }, [baseProducts, filters, sortBy]);

  /* ------------ helpers ---------------------- */
  const clearAll = () => setFilters({ material: [], price: "" });
  const removeChip = (facet, value) =>
    setFilters((prev) => ({
      ...prev,
      [facet]: prev[facet].filter((v) => v !== value),
    }));

  /* ------------ render ----------------------- */
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">
        {formattedCategory}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* -------------- sidebar filters -------------- */}
        <FacetedFilter filters={filters} setFilters={setFilters} />

        {/* -------------- main list -------------------- */}
        <div className="flex-1">
          {/* active chips & sort */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {filters.material.map((m) => (
                <Chip
                  key={m}
                  label={m}
                  onRemove={() => removeChip("material", m)}
                />
              ))}
              {filters.price && (
                <Chip
                  label={filters.price}
                  onRemove={() => setFilters((p) => ({ ...p, price: "" }))}
                />
              )}
              {!!(filters.material.length || filters.price) && (
                <button
                  onClick={clearAll}
                  className="text-sm text-gray-500 hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="name-asc">Name A–Z</option>
            </select>
          </div>

          {/* product grid */}
          {filteredProducts.length === 0 ? (
            <p>No products match the selected filters.</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/product/${p.id}`)}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col overflow-hidden"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 flex-1">
                      {p.description}
                    </p>
                    <p className="font-bold mt-2">${p.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* simple chip component */
function Chip({ label, onRemove }) {
  return (
    <span className="flex items-center bg-accent/10 text-accent px-3 py-1 text-sm rounded-full">
      {label}
      <button
        onClick={onRemove}
        className="ml-1 font-bold leading-none hover:text-red-500"
        aria-label={`Remove ${label}`}
      >
        ×
      </button>
    </span>
  );
}
