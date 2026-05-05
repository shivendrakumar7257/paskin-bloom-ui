import { createFileRoute } from "@tanstack/react-router";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";

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
      <FeaturedProducts />
    </>
  );
}
