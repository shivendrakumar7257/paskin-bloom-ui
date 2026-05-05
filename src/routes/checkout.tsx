import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Truck, ShieldCheck, MapPin, Building, CreditCard as CardIcon, CheckCircle2, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — PaskinCare" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { items, totalPrice, clearCart } = useCart();

  const handlePlaceOrder = () => {
    setOrderSuccess(true);
    clearCart();
  };

  if (items.length === 0 && !orderSuccess) {
    return (
      <div className="pt-48 pb-24 bg-white min-h-screen text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <PackageCheck className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Your bag is empty</h2>
          <p className="text-muted-foreground mb-8">Add some products to your bag before checking out.</p>
          <Link to="/" className="inline-flex h-14 items-center justify-center px-8 bg-primary text-white rounded-2xl font-bold hover:bg-primary-glow transition-all">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="font-display text-4xl font-bold">Checkout</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <ShieldCheck className="h-4 w-4 text-primary" />
               Secure Checkout
            </div>
          </div>
          
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
            {/* Form */}
            <div className="space-y-6">
              {/* Progress */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-border/50 flex items-center gap-8">
                <div className={cn("flex items-center gap-3 transition-colors", step >= 1 ? "text-primary" : "text-muted-foreground")}>
                   <span className={cn("w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm transition-all", step >= 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-100")}>1</span>
                   <span className="font-bold">Shipping</span>
                </div>
                <div className="h-px flex-1 bg-slate-100" />
                <div className={cn("flex items-center gap-3 transition-colors", step >= 2 ? "text-primary" : "text-muted-foreground")}>
                   <span className={cn("w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm transition-all", step >= 2 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-slate-100")}>2</span>
                   <span className="font-bold">Payment</span>
                </div>
              </div>

              {step === 1 && (
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-border/50 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      Shipping Address
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
                       <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
                       <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="Enter last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Street Address</label>
                     <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="House no, Building, Street name" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">City</label>
                       <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">State</label>
                       <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="State" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Pincode</label>
                       <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="Zip code" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                     <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="+91 00000 00000" />
                  </div>
                  <Button onClick={() => setStep(2)} className="w-full h-16 rounded-2xl text-lg font-bold mt-4 bg-primary hover:bg-primary-glow shadow-xl shadow-primary/20">
                    Continue to Payment
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-border/50 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <CardIcon className="h-5 w-5 text-primary" />
                    Payment Method
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-bold text-sm">Card</span>
                       </div>
                       <div className="w-5 h-5 rounded-full border-4 border-primary" />
                    </div>
                    <div className="p-5 rounded-2xl border border-border hover:border-primary/50 transition-colors flex items-center justify-between cursor-pointer group">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                            <Building className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <span className="font-bold text-sm text-muted-foreground group-hover:text-foreground">UPI / Net Banking</span>
                       </div>
                       <div className="w-5 h-5 rounded-full border border-border" />
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-4">
                     <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Card Number</label>
                       <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="0000 0000 0000 0000" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Expiry Date</label>
                           <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">CVV</label>
                           <input className="w-full h-14 px-5 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" placeholder="123" />
                        </div>
                     </div>
                  </div>

                  <Button onClick={handlePlaceOrder} className="w-full h-16 rounded-2xl text-lg font-bold mt-4 bg-primary hover:bg-primary-glow shadow-xl shadow-primary/20">
                    Place Order
                  </Button>
                  <button onClick={() => setStep(1)} className="w-full text-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                    Back to Shipping
                  </button>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-border/50 space-y-6">
                <h3 className="text-xl font-bold">Order Summary</h3>
                
                <div className="space-y-4 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                   {items.map((item) => (
                     <div key={item.id} className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-xl bg-slate-50 overflow-hidden border border-border/50 flex-shrink-0">
                           <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className="font-bold text-sm truncate">{item.name}</h4>
                           <p className="text-xs text-muted-foreground">{item.quantity} x ₹{item.price.toLocaleString()}</p>
                        </div>
                        <span className="font-bold text-sm">₹{(item.price * item.quantity).toLocaleString()}</span>
                     </div>
                   ))}
                </div>

                <div className="h-px bg-slate-100" />

                <div className="space-y-4">
                  <div className="flex justify-between text-muted-foreground text-sm font-medium">
                    <span>Subtotal</span>
                    <span className="font-bold text-foreground">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-sm font-medium">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold">Free</span>
                  </div>
                  <div className="pt-4 flex justify-between text-2xl font-bold border-t border-slate-100">
                    <span>Total</span>
                    <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-2xl bg-slate-50 flex items-center gap-3 border border-slate-100">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Secure SSL encrypted payment</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 flex items-center gap-4 border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                   <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                   <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Standard Shipping</p>
                   <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                      Expected delivery: <span className="font-bold text-foreground">3-5 business days</span>.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {orderSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
           <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 text-center shadow-2xl animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                 <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Order Placed!</h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                 Thank you for your purchase. We've sent an order confirmation to your email.
              </p>
              <div className="space-y-3">
                <Link to="/" className="block w-full h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-lg hover:bg-primary-glow transition-all shadow-xl shadow-primary/20">
                  Continue Shopping
                </Link>
                <p className="text-xs text-muted-foreground font-medium pt-4">Order ID: #PASKIN-{Math.floor(Math.random() * 1000000)}</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
