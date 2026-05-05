import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, Phone, ArrowRight, Github } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log In — PASKIN" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 pt-32">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-6">
            <img src={logo} alt="PASKIN" className="h-12 w-auto mx-auto" />
          </Link>
          <h1 className="text-3xl font-bold font-display">Welcome Back</h1>
          <p className="text-muted-foreground mt-2 font-medium">Log in to your PASKIN account</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-soft border border-border/50">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email or Mobile</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder="name@example.com" 
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all font-medium" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end ml-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Password</label>
                <button type="button" className="text-[10px] font-bold text-primary hover:underline">Forgot Password?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="password"
                  placeholder="••••••••" 
                  className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all font-medium" 
                />
              </div>
            </div>

            <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-glow transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
              Log In
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground bg-white px-4">Or continue with</div>
          </div>

          <button className="w-full h-14 bg-slate-50 text-foreground rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-100 transition-all border border-border/50">
            <Github className="h-5 w-5" />
            Continue with Github
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground font-medium">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
}
