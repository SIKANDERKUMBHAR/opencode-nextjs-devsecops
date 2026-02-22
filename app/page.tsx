import HomeCta from "@/components/sections/home-cta";
import HomeFeatures from "@/components/sections/home-features";
import HomeFlavorBurst from "@/components/sections/home-flavor-burst";
import HomeHero from "@/components/sections/home-hero";
import HomePromoBanner from "@/components/sections/home-promo-banner";
import FlavorCompare from "@/components/sections/flavor-compare";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomePromoBanner />
      <HomeFeatures />
      <HomeFlavorBurst />
      <FlavorCompare />
      <HomeCta />
    </main>
  );
}
