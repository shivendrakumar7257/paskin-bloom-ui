import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, 
  ChevronRight, 
  Calendar, 
  User, 
  CreditCard, 
  Truck,
  CheckCircle2,
  XCircle,
  Clock,
  MoreVertical,
  ChevronDown
} from "lucide-react";
import { toast } from "sonner";

const DUMMY_ORDERS = [
  { id: "ORD-2024-01", customer: "Rahul Sharma", product: "Amoxicillin 500mg", qty: 2, amount: 498, status: "pending", date: "May 20, 2024", payment: "Paid", image: "https://images.unsplash.com/photo-1611073103901-09605d8f6cc9?auto=format&fit=crop&q=80&w=300" },
  { id: "ORD-2024-02", customer: "Priya Patel", product: "Sea Buckthorn Oil", qty: 1, amount: 749, status: "completed", date: "May 18, 2024", payment: "Paid", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=300" },
  { id: "ORD-2024-03", customer: "Amit Kumar", product: "Herbal Balm", qty: 3, amount: 1197, status: "pending", date: "May 21, 2024", payment: "Unpaid", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300" },
  { id: "ORD-2024-04", customer: "Sonia Singh", product: "Vitamin C Serum", qty: 1, amount: 1299, status: "cancel", date: "May 15, 2024", payment: "Refunded", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300" },
];

const ORDER_STEPS = ["Accepted", "Shipped", "Out For Delivery", "Delivered"];

export default function AdminOrders() {
  const [activeTab, setActiveTab] = useState("total");
  const [orders, setOrders] = useState(DUMMY_ORDERS);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const filteredOrders = orders.filter(order => {
    if (activeTab === "total") return true;
    return order.status === activeTab;
  });

  const handleAcceptOrder = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "completed" } : o));
    toast.success("Order accepted and processing started!");
  };

  const handleCancelOrder = (id: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: "cancel" } : o));
    toast.error("Order has been cancelled.");
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Order Fulfilment</h2>
          <p className="text-slate-500 mt-1">Track and process customer orders in real-time.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-[2rem] w-fit">
        {[
          { id: "total", label: "Total Orders", icon: Package },
          { id: "pending", label: "Pending", icon: Clock },
          { id: "completed", label: "Completed", icon: CheckCircle2 },
          { id: "cancel", label: "Cancelled", icon: XCircle },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-[1.5rem] text-sm font-bold transition-all ${
              activeTab === tab.id 
                ? "bg-white text-primary shadow-sm" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredOrders.map((order) => (
            <motion.div
              key={order.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col xl:flex-row gap-8">
                  {/* Left: Product & Basic Info */}
                  <div className="flex-1 flex gap-6">
                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                      <img src={order.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={order.product} />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{order.id}</span>
                        <div className={`h-1.5 w-1.5 rounded-full ${order.status === 'completed' ? 'bg-emerald-500' : order.status === 'pending' ? 'bg-amber-500' : 'bg-rose-500'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{order.product}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <User className="h-4 w-4 text-slate-400" />
                          {order.customer}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          {order.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:border-x border-slate-50 xl:px-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Qty & Price</p>
                      <p className="text-sm font-bold text-slate-800">{order.qty} Unit(s) • ₹{order.amount}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment</p>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${order.payment === 'Paid' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                        {order.payment}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                      <p className="text-sm font-bold text-slate-800 capitalize">{order.status}</p>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-3">
                    {order.status === "pending" ? (
                      <>
                        <button 
                          onClick={() => handleAcceptOrder(order.id)}
                          className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Accept
                        </button>
                        <button 
                          onClick={() => handleCancelOrder(order.id)}
                          className="flex-1 sm:flex-none bg-white hover:bg-rose-50 text-rose-500 border border-rose-100 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                        >
                          <XCircle className="h-4 w-4" />
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={() => setSelectedOrderId(selectedOrderId === order.id ? null : order.id)}
                        className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-600 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                      >
                        Track Shipment
                        <ChevronDown className={`h-4 w-4 transition-transform ${selectedOrderId === order.id ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress UI */}
                <AnimatePresence>
                  {selectedOrderId === order.id && order.status === "completed" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-10 pt-10 border-t border-slate-50"
                    >
                      <div className="relative flex justify-between">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0" />
                        <div className="absolute top-1/2 left-0 w-[66%] h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-1000" />
                        
                        {ORDER_STEPS.map((step, idx) => (
                          <div key={step} className="relative z-10 flex flex-col items-center gap-3">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${idx <= 2 ? 'bg-primary text-white scale-110' : 'bg-white text-slate-300 border-4 border-slate-100'}`}>
                              {idx < 2 ? <CheckCircle2 className="h-5 w-5" /> : idx === 2 ? <Truck className="h-5 w-5" /> : <Package className="h-5 w-5" />}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${idx <= 2 ? 'text-primary' : 'text-slate-400'}`}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
