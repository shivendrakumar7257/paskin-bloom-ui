import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, X, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-full gradient-primary text-primary-foreground transition-transform group-hover:rotate-12">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide">
            PASKIN
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              activeProps={{ className: "text-primary after:w-full" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button aria-label="Search" className="p-2.5 rounded-full hover:bg-muted transition">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Account" className="p-2.5 rounded-full hover:bg-muted transition hidden sm:inline-flex">
            <User className="h-4 w-4" />
          </button>
          <button aria-label="Cart" className="relative p-2.5 rounded-full hover:bg-muted transition">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] grid place-items-center font-semibold">
              2
            </span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden p-2.5 rounded-full hover:bg-muted transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden mt-3 mx-6 rounded-2xl bg-background/95 backdrop-blur-xl border border-border p-4 shadow-elegant animate-fade-in">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-lg hover:bg-muted text-sm font-medium"
                  activeProps={{ className: "bg-muted text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
