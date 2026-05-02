import { createFileRoute } from "@tanstack/react-router";
import { Blog as BlogSection } from "@/components/site/Blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — PASKIN Herbal Wellness Blog" },
      { name: "description", content: "Tips, traditions and stories from the world of Ayurveda, herbal skincare and natural healing." },
      { property: "og:title", content: "PASKIN Journal" },
      { property: "og:description", content: "Stories from the herbal world." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
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
