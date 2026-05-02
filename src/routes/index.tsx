import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { BestSellers } from "@/components/site/BestSellers";
import { About } from "@/components/site/About";
import { TrustVideo } from "@/components/site/TrustVideo";
import { Blog } from "@/components/site/Blog";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <About />
      <TrustVideo />
      <Blog />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
