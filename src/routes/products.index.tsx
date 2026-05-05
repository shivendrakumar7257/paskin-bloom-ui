import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { Pill, Stethoscope, BriefcaseMedical, Syringe, Leaf } from "lucide-react";
import catAntibiotics from "@/assets/cat-antibiotics.png";
import catDerma from "@/assets/cat-derma.png";
import catDental from "@/assets/cat-dental.png";
import catVitamins from "@/assets/cat-vitamins.png";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Pharma Products — PASKIN" },
      { name: "description", content: "Explore our range of quality pharmaceutical products." },
    ],
  }),
  component: ProductsPage,
});

const pharmaCategories = [
  { id: "All", title: "All Products", icon: Leaf, color: "bg-gray-100" },
  { id: "Antibiotics", title: "Antibiotics", icon: Pill, color: "bg-blue-100", image: catAntibiotics },
  { id: "Derma", title: "Derma", icon: Stethoscope, color: "bg-green-100", image: catDerma },
  { id: "Dental", title: "Dental", icon: BriefcaseMedical, color: "bg-cyan-100", image: catDental },
  { id: "Vitamins & Supplements", title: "Vitamins & Supplements", icon: Syringe, color: "bg-orange-100", image: catVitamins },
];

function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = useMemo(() => {
    return selectedCat === "All" 
      ? products 
      : products.filter(p => p.category === selectedCat);
  }, [selectedCat]);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24">
      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-border/50">
        <div className="container mx-auto px-6">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 text-center">Pharma Collection</p>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-center mb-12">
            Our Pharma Products
          </h1>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pharmaCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 border-2 ${
                  selectedCat === cat.id 
                    ? "border-primary bg-primary/5 shadow-md scale-[1.02]" 
                    : "border-transparent bg-white hover:border-primary/20 hover:shadow-sm"
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${cat.color} flex items-center justify-center mb-3`}>
                  <cat.icon className={`h-6 w-6 ${selectedCat === cat.id ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider text-center ${selectedCat === cat.id ? "text-primary" : "text-muted-foreground"}`}>
                  {cat.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 mt-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-foreground capitalize">
              {selectedCat.toLowerCase()} Products
            </h2>
            <p className="text-muted-foreground text-sm mt-1">Showing {filtered.length} products</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
