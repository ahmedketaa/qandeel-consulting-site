// app/page.jsx (أو app/(ar)/page.jsx حسب مسارك)
import Script from "next/script";

import AdvertisingSolutionsSection from "@/components/ads/AdvertisingSolutionsSection";
import GovSlider from "@/components/gov-section/GovSlider";
import HeroSlider from "@/components/hero/HeroSlider";
import LocationSection from "@/components/Location/LocationSection";
import AboutQandilSection from "@/components/promise/promise";
import ServicesTabsSection from "@/components/services-tabs/ServicesTabsSection";
import ServicesSection from "@/components/services/ServicesSection";
import StartNowSection from "@/components/start-now/StartNowSection";
import WhyChooseSection from "@/components/why-us/WhyChooseSection";
import FaqSections from "@/components/faq/faq";
import HomeFaqSection from "@/components/faq/HomeFaqSection";

export const metadata = {
  title: "يوسف قنديل للاستشارات القانونية | محامٍ ومستشار قانوني في الإمارات",
  description:
    "مكتب يوسف قنديل للاستشارات القانونية يقدم خدمات قانونية متكاملة تشمل الاستشارات، صياغة العقود، تأسيس الشركات، وتخليص المعاملات الحكومية داخل دولة الإمارات.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "يوسف قنديل للاستشارات القانونية",
    description:
      "خدمات قانونية متكاملة للأفراد والشركات داخل دولة الإمارات و مصر، بخبرة قانونية واحترافية عالية.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  /* ========= Structured Data (SEO فقط) ========= */
  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "يوسف قنديل للاستشارات القانونية",
    url: "https://qandeil.com",
    telephone: "+971556631971",
    address: {
      "@type": "PostalAddress",
      addressLocality: "أبوظبي",
      addressCountry: "AE",
    },
    areaServed: ["AE", "EG"],
    sameAs: [
      "https://www.facebook.com/share/1Eis3maCUf/?mibextid=wwXIfr",
      "https://maps.app.goo.gl/khZwvZcb8auMoJaK8",
    ],
    description:
      "مكتب قانوني متخصص في تقديم الاستشارات القانونية، صياغة العقود، تأسيس الشركات، وتخليص المعاملات الحكومية داخل الإمارات ومصر.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: "https://qandeil.com",
      },
    ],
  };

  return (
    <>
      
      <Script
        id="jsonld-legalservice-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <Script
        id="jsonld-breadcrumb-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* UI (بدون أي تعديل) */}
      <main className="min-h-screen bg-background">
        <HeroSlider />
        <ServicesSection />
        <GovSlider />
        <AboutQandilSection />
        <ServicesTabsSection />
        <AdvertisingSolutionsSection />
       
        <WhyChooseSection />
         <HomeFaqSection />
        <StartNowSection />
        <LocationSection />
      </main>
    </>
  );
}
