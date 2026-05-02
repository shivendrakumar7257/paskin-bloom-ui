import { Heart, ShoppingBag, Star } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  category?: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative bg-card rounded-2xl overflow-hidden border border-border hover-lift">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <button
          aria-label="Wishlist"
          className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-background/90 backdrop-blur opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Heart className="h-4 w-4" />
        </button>

        <button className="absolute inset-x-3 bottom-3 inline-flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl text-sm font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-primary">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="p-5">
        {product.category && (
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
            {product.category}
          </p>
        )}
        <h3 className="font-display text-lg font-medium leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.round(product.rating)
                    ? "fill-primary text-primary"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2 mt-3">
          <span className="font-display text-xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
