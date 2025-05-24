import { CTASection } from "@/modules/home/components/cta-section";
import { Hero } from "@/modules/home/components/hero";
import { Testimonials } from "@/modules/home/components/testimonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <CTASection />
    </main>
  );
}
