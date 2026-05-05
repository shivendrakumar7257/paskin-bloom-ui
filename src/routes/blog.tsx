import { Blog as BlogSection } from "@/components/site/Blog";
import { useEffect } from "react";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Journal — PASKIN Herbal Wellness Blog";
  }, []);

  return (
    <>
      <section className="pt-32 pb-6 container mx-auto px-6 text-center">
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">Journal</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium text-balance max-w-2xl mx-auto">
          Tales from the herbal world.
        </h1>
      </section>
      <BlogSection />
    </>
  );
}
