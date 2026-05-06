import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Image as ImageIcon, 
  X, 
  Check,
  Calendar,
  Eye,
  Crop,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { toast } from "sonner";

interface Blog {
  id: string;
  title: string;
  date: string;
  image: string;
  author: string;
}

const DUMMY_BLOGS: Blog[] = [
  { id: "1", title: "Benefits of Natural Herbs in Daily Life", date: "May 10, 2024", author: "Dr. Herbal", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600" },
  { id: "2", title: "How to Choose the Right Antibiotic", date: "May 12, 2024", author: "Health Desk", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600" },
  { id: "3", title: "The Rise of Ayurvedic Skin Care", date: "May 15, 2024", author: "Beauty Guru", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=600" },
];

export default function AdminBlog() {
  const [blogs, setBlogs] = useState<Blog[]>(DUMMY_BLOGS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: string) => {
    if (confirm("Delete this blog post?")) {
      setBlogs(blogs.filter(b => b.id !== id));
      toast.success("Blog post deleted");
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Blog Content</h2>
          <p className="text-slate-500 mt-1">Publish health tips and medicinal news.</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-primary hover:bg-primary-glow text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group"
        >
          <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={blog.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-2 w-full">
                    <button className="flex-1 bg-white hover:bg-slate-50 text-slate-800 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all">
                      <Eye className="h-4 w-4" />
                      Preview
                    </button>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-relaxed mb-6">
                  {blog.title}
                </h3>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-2">
                    <Edit3 className="h-4 w-4" />
                    Edit Post
                  </button>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Blog Editor Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-8 sm:p-12 overflow-y-auto">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Create New Post</h3>
                  <button 
                    onClick={() => setIsFormOpen(false)}
                    className="p-3 hover:bg-slate-100 rounded-2xl transition-colors border border-slate-100"
                  >
                    <X className="h-6 w-6 text-slate-400" />
                  </button>
                </div>

                <div className="space-y-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Post Title</label>
                    <input type="text" className="w-full bg-slate-50 border-transparent rounded-[1.5rem] py-5 px-6 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-xl font-bold" placeholder="Enter a catchy title..." />
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Featured Image</label>
                      <div className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center gap-4 group hover:bg-primary/5 hover:border-primary transition-all cursor-pointer">
                        <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                          <ImageIcon className="h-8 w-8 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-bold text-slate-600">Click to upload cover</p>
                          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Recommended: 1200x630</p>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center justify-center gap-2 transition-all">
                        <Crop className="h-4 w-4" />
                        Open Image Cropper
                      </button>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Post Metadata</label>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 ml-1">AUTHOR NAME</label>
                          <input type="text" className="w-full bg-slate-50 rounded-xl py-3.5 px-4 border-transparent outline-none focus:bg-white focus:border-primary/20 transition-all text-sm font-medium" placeholder="e.g. Dr. Jane" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 ml-1">TAGS (COMMA SEPARATED)</label>
                          <input type="text" className="w-full bg-slate-50 rounded-xl py-3.5 px-4 border-transparent outline-none focus:bg-white focus:border-primary/20 transition-all text-sm font-medium" placeholder="Health, Ayurveda, Tips" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Post Content</label>
                    <div className="min-h-[300px] bg-slate-50 rounded-[2rem] p-8 border border-slate-100 flex flex-col items-center justify-center text-center">
                      <BookOpen className="h-10 w-10 text-slate-200 mb-4" />
                      <p className="text-slate-400 italic">Rich Text Editor Placeholder</p>
                      <p className="text-[10px] text-slate-300 mt-2 uppercase tracking-widest max-w-[200px]">Formatting tools like Bold, Italic, Lists will be here.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button onClick={() => setIsFormOpen(false)} className="flex-1 py-5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl transition-all">Discard Draft</button>
                    <button onClick={() => { setIsFormOpen(false); toast.success("Post published!"); }} className="flex-2 bg-primary hover:bg-primary-glow text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
                      <Check className="h-5 w-5" />
                      Publish Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
