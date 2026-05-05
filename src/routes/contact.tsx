import { ContactCTA } from "@/components/site/ContactCTA";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact PASKIN — We'd love to hear from you";
  }, []);

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
