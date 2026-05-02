import { createFileRoute } from "@tanstack/react-router";
import { About as AboutSection } from "@/components/site/About";
import { TrustVideo } from "@/components/site/TrustVideo";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PASKIN — Our Herbal Story" },
      { name: "description", content: "Learn how PASKIN brings centuries-old Ayurvedic wisdom into modern, organic wellness products." },
      { property: "og:title", content: "About PASKIN — Our Herbal Story" },
      { property: "og:description", content: "Centuries of Ayurvedic wisdom, crafted by hand." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 container mx-auto px-6 text-center">
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">About PASKIN</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium text-balance max-w-3xl mx-auto leading-tight">
          A modern take on ancient herbal wisdom.
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
          We blend timeless Ayurvedic traditions with thoughtful design to
          deliver products that nurture both body and spirit.
        </p>
      </section>
      <AboutSection />
      <TrustVideo />
      <Testimonials />
    </>
  );
}
