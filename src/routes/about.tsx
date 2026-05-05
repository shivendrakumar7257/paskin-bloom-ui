import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About PASKIN — Our Herbal Story";
  }, []);

  return (
    <>
      <FeaturedProducts />
    </>
  );
}
