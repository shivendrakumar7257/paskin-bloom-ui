import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="bg-white px-3 py-2 rounded-xl inline-block transition-transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md">
              <img src={logo} alt="PASKIN" className="h-8 w-auto" />
            </Link>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            Pure herbal wellness rooted in the wisdom of Ayurveda. Crafted with
            care, certified organic, and trusted by thousands.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578746242700" },
              { Icon: Twitter, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                aria-label="Social link"
                className="grid place-items-center h-9 w-9 rounded-full border border-background/20 hover:bg-primary hover:border-primary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-background/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "Herbal Wellness" },
              { to: "/products", label: "Pharma" },
              { to: "/about-us", label: "About Us" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-glow transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Stay in touch
          </h4>
          <p className="text-sm text-background/70 mb-4">
            Get herbal wellness tips & 10% off your first order.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-background/10 border border-background/20 text-sm placeholder:text-background/50 focus:outline-none focus:border-primary"
            />
            <button className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-glow transition">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} PASKIN Herbal Co. All rights reserved.</p>
          <p>Made with care from nature 🌿</p>
        </div>
      </div>
    </footer>
  );
}
