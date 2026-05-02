import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop All Products — PASKIN Herbal Care" },
      { name: "description", content: "Browse PASKIN's full collection of organic Ayurvedic skincare, herbal medicines, hair care and wellness essentials." },
      { property: "og:title", content: "Shop All Products — PASKIN" },
      { property: "og:description", content: "Premium organic Ayurvedic products, crafted with care." },
    ],
  }),
  component: ProductsPage,
});

const categories = ["All", "Skincare", "Hair Care", "Wellness", "Herbal Medicine"];
const sorts = ["Popularity", "Price: Low to High", "Price: High to Low", "Newest"];

function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [maxPrice, setMaxPrice] = useState(40);
  const [sort, setSort] = useState(sorts[0]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === "All" || p.category === cat) && p.price <= maxPrice);
    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "Popularity") list = [...list].sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [cat, maxPrice, sort]);

  return (
    <>
      <section className="pt-32 pb-10 container mx-auto px-6">
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">Shop</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium text-balance max-w-2xl">
          The full PASKIN collection.
        </h1>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Filters */}
          <aside className="space-y-8 lg:sticky lg:top-28 self-start bg-card rounded-2xl p-6 border border-border h-fit">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <SlidersHorizontal className="h-4 w-4 text-primary" /> Filters
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Category</h3>
              <ul className="space-y-2">
                {categories.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setCat(c)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-lg transition ${
                        cat === c ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Max Price: <span className="text-primary font-semibold">${maxPrice}</span>
              </h3>
              <input
                type="range"
                min={10}
                max={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>
          </aside>

          {/* Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">{filtered.length} products</p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm px-4 py-2.5 rounded-xl bg-card border border-border focus:outline-none focus:border-primary"
              >
                {sorts.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
