import AdvertisingSolutionsSection from "@/components/ads/AdvertisingSolutionsSection";
import GovSlider from "@/components/gov-section/GovSlider";
import HeroSlider from "@/components/hero/HeroSlider";
import LocationSection from "@/components/Location/LocationSection";
import AboutQandilSection from "@/components/promise/promise";
import ServicesTabsSection from "@/components/services-tabs/ServicesTabsSection";
import ServicesSection from "@/components/services/ServicesSection";
import StartNowSection from "@/components/start-now/StartNowSection";
import WhyChooseSection from "@/components/why-us/WhyChooseSection";

export default function Home() {
  return (
      <main className="min-h-screen bg-background">
           <HeroSlider />
           <ServicesSection />
           <GovSlider />
           <AboutQandilSection />
           <ServicesTabsSection />
           <AdvertisingSolutionsSection />
           <WhyChooseSection />
           <StartNowSection />
           <LocationSection />
      </main>
  );
}
