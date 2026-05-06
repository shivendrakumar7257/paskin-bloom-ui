import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Upload, 
  X, 
  Image as ImageIcon,
  Check,
  ChevronDown
} from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sellPrice: number;
  stock: number;
  image: string;
}

const DUMMY_PRODUCTS: Product[] = [
  { id: "1", name: "Amoxicillin 500mg", category: "Antibiotics", price: 299, sellPrice: 249, stock: 124, image: "https://images.unsplash.com/photo-1611073103901-09605d8f6cc9?auto=format&fit=crop&q=80&w=300" },
  { id: "2", name: "Sea Buckthorn Oil", category: "Ayurvedic Care", price: 899, sellPrice: 749, stock: 45, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=300" },
  { id: "3", name: "Vitamin C Serum", category: "Skin Care", price: 1599, sellPrice: 1299, stock: 12, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300" },
  { id: "4", name: "Herbal Balm", category: "Ayurvedic Care", price: 449, sellPrice: 399, stock: 89, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300" },
];

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>(DUMMY_PRODUCTS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Form State
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
      toast.success(`${files.length} images added`);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
      toast.success("Product removed from inventory");
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header Area */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Product Inventory</h2>
          <p className="text-slate-500 mt-1">Manage your medicine catalog and stock levels.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
          <div className="flex-1 min-w-[280px] relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search products by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          
          <div className="relative group min-w-[180px]">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-5 text-sm appearance-none focus:ring-2 focus:ring-primary/20 transition-all font-medium pr-10"
            >
              <option value="All">All Categories</option>
              <option value="Antibiotics">Antibiotics</option>
              <option value="Ayurvedic Care">Ayurvedic Care</option>
              <option value="Skin Care">Skin Care</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none group-focus-within:rotate-180 transition-transform" />
          </div>

          <button 
            onClick={() => setIsFormOpen(true)}
            className="bg-primary hover:bg-primary-glow text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group ml-auto sm:ml-0"
          >
            <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
            Add Product
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2.5rem] p-5 shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-slate-200/50 transition-all relative overflow-hidden"
            >
              {/* Product Image */}
              <div className="aspect-square rounded-[1.75rem] overflow-hidden mb-6 relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => handleDelete(p.id)}
                    className="p-2.5 bg-white/90 backdrop-blur-sm text-rose-500 rounded-xl shadow-lg hover:bg-rose-500 hover:text-white transition-all transform translate-y-[-120%] group-hover:translate-y-0 duration-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                   <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.stock < 20 ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'}`}>
                    {p.stock < 20 ? 'Low Stock' : 'In Stock'}
                   </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3 px-1">
                <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{p.category}</p>
                <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-primary transition-colors">{p.name}</h3>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-slate-800">₹{p.sellPrice}</span>
                    <span className="text-sm text-slate-400 line-through">₹{p.price}</span>
                  </div>
                  <button className="p-2.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-800 transition-colors">
                    <Edit3 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add Product Modal (Side Sheet Style) */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white h-screen overflow-y-auto shadow-2xl"
            >
              <div className="p-8 sm:p-12 space-y-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 tracking-tight">New Product</h3>
                    <p className="text-slate-500 mt-1">Fill in the details to add a new item.</p>
                  </div>
                  <button 
                    onClick={() => setIsFormOpen(false)}
                    className="p-3 hover:bg-slate-100 rounded-2xl transition-colors border border-slate-100"
                  >
                    <X className="h-6 w-6 text-slate-400" />
                  </button>
                </div>

                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); toast.success("Product saved!"); setIsFormOpen(false); }}>
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Product Name</label>
                      <input type="text" className="w-full bg-slate-50 border-transparent rounded-2xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="Amoxicillin..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Category</label>
                      <select className="w-full bg-slate-50 border-transparent rounded-2xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium">
                        <option>Antibiotics</option>
                        <option>Ayurvedic Care</option>
                        <option>Skin Care</option>
                      </select>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Base Price</label>
                      <input type="number" className="w-full bg-slate-50 border-transparent rounded-2xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="₹" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Sell Price</label>
                      <input type="number" className="w-full bg-slate-50 border-transparent rounded-2xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="₹" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">GST %</label>
                      <input type="number" className="w-full bg-slate-50 border-transparent rounded-2xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="18%" />
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Product Images</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
                    >
                      <input type="file" multiple hidden ref={fileInputRef} onChange={handleImageUpload} accept="image/*" />
                      <div className="bg-slate-100 p-4 rounded-2xl w-fit mx-auto group-hover:bg-primary/10 transition-colors">
                        <Upload className="h-8 w-8 text-slate-400 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="mt-4 text-sm font-bold text-slate-600">Drag & drop or <span className="text-primary">browse files</span></p>
                      <p className="text-xs text-slate-400 mt-1">Support JPG, PNG, WEBP (Max 5MB)</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                      {images.map((img, i) => (
                        <div key={i} className="relative w-24 h-24 rounded-2xl overflow-hidden group border border-slate-100">
                          <img src={img} className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={() => removeImage(i)}
                            className="absolute inset-0 bg-rose-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Description</label>
                    <textarea className="w-full bg-slate-50 border-transparent rounded-2xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium h-32" placeholder="Tell us about the product..."></textarea>
                  </div>

                  {/* Additional Info Tabs-like sections */}
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Usage & Ingredients</label>
                      <div className="bg-slate-50 rounded-[2rem] p-6 space-y-4">
                        <input type="text" placeholder="Benefits..." className="w-full bg-white rounded-xl py-3 px-4 border border-slate-100 focus:border-primary/50 outline-none transition-all text-sm" />
                        <input type="text" placeholder="Usage instructions..." className="w-full bg-white rounded-xl py-3 px-4 border border-slate-100 focus:border-primary/50 outline-none transition-all text-sm" />
                        <input type="text" placeholder="Key ingredients..." className="w-full bg-white rounded-xl py-3 px-4 border border-slate-100 focus:border-primary/50 outline-none transition-all text-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-5 rounded-2xl transition-all">Discard</button>
                    <button type="submit" className="flex-1 bg-primary hover:bg-primary-glow text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
                      <Check className="h-5 w-5" />
                      Publish Product
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
