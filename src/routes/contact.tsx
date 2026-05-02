import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "@/components/site/ContactCTA";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PASKIN — We'd love to hear from you" },
      { name: "description", content: "Reach out to the PASKIN herbal care team for product help, orders, or wholesale inquiries." },
      { property: "og:title", content: "Contact PASKIN" },
      { property: "og:description", content: "Get in touch with our herbal care team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-6 container mx-auto px-6 text-center">
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium text-balance max-w-2xl mx-auto">
          Let's talk wellness.
        </h1>
      </section>
      <ContactCTA />
    </>
  );
}
