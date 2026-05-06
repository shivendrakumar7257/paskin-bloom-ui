import { Link, useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { products, DetailedProduct } from "@/data/products";
import { Star, ShoppingBag, Zap, Heart, ShieldCheck, Truck, RotateCcw, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ProductCard } from "@/components/site/ProductCard";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();
  
  const product = useMemo(() => 
    (products.find((p) => p.id === id) || products[0]) as DetailedProduct,
  [id]);

  const similarProducts = useMemo(() => {
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
       addToCart(product);
    }
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-6 lg:mb-8 transition-colors">
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4 lg:sticky lg:top-32 self-start">
            <div className="aspect-square rounded-2xl lg:rounded-[2.5rem] overflow-hidden bg-slate-50 border border-border/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover animate-in fade-in duration-700"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar scroll-smooth">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl lg:rounded-2xl bg-slate-50 border border-border/50 overflow-hidden cursor-pointer hover:border-primary transition-all group">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                 </div>
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-6 lg:mb-8">
              <p className="text-primary text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] mb-2 lg:mb-3">{product.category}</p>
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 lg:h-4 lg:w-4 ${i < Math.round(product.rating || 5) ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-muted-foreground font-medium">
                  {product.reviews || 0} reviews
                </span>
              </div>
            </div>

            <div className="mb-8 lg:mb-10">
              <div className="flex items-baseline gap-3 mb-4 lg:mb-6">
                <span className="text-3xl lg:text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-lg lg:text-xl text-muted-foreground line-through opacity-50 font-medium">₹{product.oldPrice.toLocaleString()}</span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {product.description}
              </p>
            </div>

            {/* Tabs for extra details */}
            <div className="mb-10 lg:mb-12">
               <div className="flex border-b border-border mb-6 overflow-x-auto hide-scrollbar whitespace-nowrap -mx-4 px-4 sm:mx-0 sm:px-0">
                  {["description", "benefits", "usage", "ingredients"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 lg:px-6 py-3 text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-all relative flex-shrink-0 ${
                        activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                    </button>
                  ))}
               </div>
               
               <div className="min-h-[100px] lg:min-h-[120px] animate-in fade-in duration-500">
                  {activeTab === "description" && <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{product.description}</p>}
                  {activeTab === "benefits" && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                      {product.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "usage" && <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{product.usage}</p>}
                  {activeTab === "ingredients" && <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{product.ingredients}</p>}
               </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="flex items-center border border-border rounded-xl lg:rounded-2xl p-1 bg-slate-50 h-12 lg:h-14">
                   <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 lg:w-12 h-full flex items-center justify-center rounded-lg lg:rounded-xl hover:bg-white hover:shadow-sm transition-all text-xl font-medium">-</button>
                   <span className="w-10 lg:w-14 text-center font-bold text-lg lg:text-xl">{quantity}</span>
                   <button onClick={() => setQuantity(q => q + 1)} className="w-10 lg:w-12 h-full flex items-center justify-center rounded-lg lg:rounded-xl hover:bg-white hover:shadow-sm transition-all text-xl font-medium">+</button>
                </div>
                <button className="flex-1 h-12 lg:h-14 rounded-xl lg:rounded-2xl border border-border flex items-center justify-center gap-2 hover:bg-slate-50 transition-all text-sm font-bold group">
                  <Heart className="h-4 w-4 lg:h-5 lg:w-5 group-hover:fill-primary group-hover:text-primary transition-colors" />
                  Wishlist
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <Button onClick={handleAddToCart} className="h-14 lg:h-16 rounded-xl lg:rounded-2xl bg-primary hover:bg-primary-glow text-white text-base lg:text-lg font-bold gap-3 border-none shadow-lg active:scale-[0.98] transition-all">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Bag
                </Button>
                <Link 
                  to="/checkout" 
                  onClick={() => addToCart(product)}
                  className="w-full"
                >
                  <Button variant="outline" className="h-14 lg:h-16 w-full rounded-xl lg:rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white text-base lg:text-lg font-bold gap-3 shadow-sm transition-all active:scale-[0.98]">
                    <Zap className="h-5 w-5" />
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-10 lg:mt-12 pt-10 lg:pt-12 border-t border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                   <ShieldCheck className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">Certified Organic</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                   <Truck className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                   <RotateCcw className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-tight">30 Days Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="mt-32">
             <div className="flex items-end justify-between mb-12">
               <div>
                  <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Recommendations</p>
                  <h2 className="font-display text-4xl font-bold">Similar Products</h2>
               </div>
               <Link to="/" className="text-primary font-bold hover:underline">View All</Link>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {similarProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
             </div>
          </section>
        )}
      </div>
    </div>
  );
}
