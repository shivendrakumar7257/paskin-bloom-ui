import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  DollarSign, 
  CreditCard, 
  Clock, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical
} from "lucide-react";

const stats = [
  { label: "Total Orders", value: "1,284", icon: ShoppingBag, color: "blue", growth: "+12.5%", positive: true },
  { label: "Total Revenue", value: "₹45.2k", icon: DollarSign, color: "emerald", growth: "+8.2%", positive: true },
  { label: "Total Payments", value: "₹38.9k", icon: CreditCard, color: "violet", growth: "+10.1%", positive: true },
  { label: "Pending Orders", value: "42", icon: Clock, color: "amber", growth: "-2.4%", positive: false },
  { label: "Pending Payments", value: "₹6.3k", icon: TrendingUp, color: "rose", growth: "+4.2%", positive: true },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Welcome Admin 👋</h2>
        <p className="text-slate-500 mt-2">Manage products, orders, categories and blogs efficiently.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-500 group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.positive ? "text-emerald-500" : "text-rose-500"}`}>
                {stat.growth}
                {stat.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden"
        >
          <div className="p-8 flex items-center justify-between border-b border-slate-50">
            <h3 className="text-xl font-bold text-slate-800">Recent Orders</h3>
            <button className="text-primary font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-50">
                  <th className="px-8 py-5">Order ID</th>
                  <th className="px-8 py-5">Customer</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5">Amount</th>
                  <th className="px-8 py-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-6 text-sm font-bold text-slate-700">#ORD-2024-0{item}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                          JD
                        </div>
                        <div className="text-sm font-medium text-slate-700">John Doe</div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100">
                        Delivered
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-slate-800">₹1,299</td>
                    <td className="px-8 py-6">
                      <button className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200">
                        <MoreVertical className="h-4 w-4 text-slate-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Sales Overview / Chart Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col"
        >
          <div className="p-8 border-b border-slate-50">
            <h3 className="text-xl font-bold text-slate-800">Sales Overview</h3>
            <p className="text-slate-400 text-xs mt-1">Monthly performance review</p>
          </div>
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-full h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-100 flex items-center justify-center mb-6">
              <p className="text-slate-400 text-sm italic">Interactive Sales Chart Placeholder</p>
            </div>
            <div className="space-y-4 w-full">
              {[
                { label: "Direct", value: "65%", color: "bg-primary" },
                { label: "Referral", value: "25%", color: "bg-blue-400" },
                { label: "Others", value: "10%", color: "bg-slate-200" },
              ].map((s) => (
                <div key={s.label} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{s.label}</span>
                    <span>{s.value}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color}`} style={{ width: s.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
