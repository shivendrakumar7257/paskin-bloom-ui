import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { MedicineCategories } from "@/components/site/MedicineCategories";
import { PartnerBanner } from "@/components/site/PartnerBanner";
import { Testimonials } from "@/components/site/Testimonials";

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <MedicineCategories />
      <PartnerBanner />
      <Testimonials />
    </>
  );
}
