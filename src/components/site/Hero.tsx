import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import heroHerbs from "@/assets/hero-herbs.jpg";
import heroPrep from "@/assets/hero-prep.jpg";

type Slide = { type: "image" | "video"; src: string; poster?: string };

const slides: Slide[] = [
  { type: "video", src: "https://cdn.coverr.co/videos/coverr-green-leaves-in-the-wind-1572/1080p.mp4", poster: heroHerbs },
  { type: "image", src: heroProducts },
  { type: "video", src: "https://cdn.coverr.co/videos/coverr-pouring-water-on-a-leaf-9893/1080p.mp4", poster: heroPrep },
  { type: "image", src: heroLifestyle },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "video" ? (
            <video
              src={slide.src}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover scale-105"
            />
          ) : (
            <img
              src={slide.src}
              alt=""
              className="h-full w-full object-cover scale-105"
              width={1920}
              height={1080}
            />
          )}
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/70" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-md border border-background/25 px-4 py-1.5 text-background text-xs font-medium w-fit animate-fade-in">
          <Sparkles className="h-3.5 w-3.5" />
          Certified Ayurvedic Wellness
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-background mt-6 leading-[1.05] text-balance animate-fade-up">
          Pure Herbal Wellness
          <span className="block italic font-light text-accent"> for a better life.</span>
        </h1>

        <p className="text-background/85 text-lg md:text-xl mt-6 max-w-xl animate-fade-up [animation-delay:120ms]">
          100% Organic. Trusted Ayurvedic care, hand-crafted from the purest
          botanicals nature has to offer.
        </p>

        <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
          <a
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary-glow transition shadow-elegant"
          >
            Shop Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-background/40 bg-background/10 backdrop-blur-md text-background px-7 py-3.5 text-sm font-semibold hover:bg-background hover:text-foreground transition"
          >
            Explore Products
          </a>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-6 right-6 container mx-auto flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active ? "w-12 bg-background" : "w-6 bg-background/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
