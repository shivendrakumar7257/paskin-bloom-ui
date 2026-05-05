import { Link } from "react-router-dom";
import { Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useEffect } from "react";

export default function SignupPage() {
  useEffect(() => {
    document.title = "Sign Up — PASKIN";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 pt-32 pb-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-6">
            <img src={logo} alt="PASKIN" className="h-12 w-auto mx-auto" />
          </Link>
          <h1 className="text-3xl font-bold font-display">Create Account</h1>
          <p className="text-muted-foreground mt-2 font-medium">Join PASKIN for organic wellness</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-border/50">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder="John Doe" 
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="email"
                  placeholder="name@example.com" 
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="tel"
                  placeholder="+91 00000 00000" 
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="password"
                  placeholder="••••••••" 
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all font-medium" 
                />
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-glow transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                Sign Up
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <p className="text-[10px] text-center text-muted-foreground mt-6 leading-relaxed">
            By signing up, you agree to our <button className="font-bold hover:underline">Terms of Service</button> and <button className="font-bold hover:underline">Privacy Policy</button>.
          </p>
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
