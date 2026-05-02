import type { Product } from "@/components/site/ProductCard";
import cream from "@/assets/product-cream.jpg";
import oil from "@/assets/product-oil.jpg";
import tonic from "@/assets/product-tonic.jpg";
import balm from "@/assets/product-balm.jpg";

export const products: Product[] = [
  { id: "1", name: "Ayurvedic Glow Face Cream", category: "Skincare", price: 28, oldPrice: 36, rating: 5, reviews: 142, image: cream, badge: "Best Seller" },
  { id: "2", name: "Bhringraj Hair Growth Oil", category: "Hair Care", price: 22, rating: 4.8, reviews: 98, image: oil, badge: "New" },
  { id: "3", name: "Ashwagandha Wellness Tonic", category: "Wellness", price: 34, oldPrice: 42, rating: 4.9, reviews: 211, image: tonic, badge: "Best Seller" },
  { id: "4", name: "Herbal Lip & Body Balm Set", category: "Skincare", price: 18, rating: 4.7, reviews: 76, image: balm },
  { id: "5", name: "Neem Clarifying Serum", category: "Skincare", price: 32, rating: 4.9, reviews: 184, image: cream, badge: "Best Seller" },
  { id: "6", name: "Triphala Digestive Support", category: "Herbal Medicine", price: 26, rating: 4.6, reviews: 132, image: tonic },
  { id: "7", name: "Coconut & Amla Hair Elixir", category: "Hair Care", price: 24, oldPrice: 30, rating: 4.8, reviews: 167, image: oil },
  { id: "8", name: "Turmeric Radiance Mask", category: "Skincare", price: 20, rating: 4.7, reviews: 89, image: balm, badge: "New" },
];
