import Hero from "../components/Hero";
import FeaturedWatches from "../components/FeaturedWatches";
import WhySection from "../components/WhySection";
import LimitedEditionSection from "../components/LimitedEditionSection";
import CelebritySpotlight from "../components/CelebritySpotlight";
import VisionSection from "../components/VisionSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWatches />
      <WhySection />
      <LimitedEditionSection />
      <CelebritySpotlight />
      <VisionSection />
      <CTASection />
    </>
  );
}