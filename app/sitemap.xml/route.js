export default function sitemap() {
  const baseUrl = "https://qandeil.com";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/articles",
    "/location",
    "/legal-consulting",
    "/elrwasy",
  ];

  const governmentServices = [
    "/government-services",
    "/government-services/abu-dhabi-chamber",
    "/government-services/abu-dhabi-judicial-department",
    "/government-services/civil-defense",
    "/government-services/economic-development",
    "/government-services/foreign-affairs",
    "/government-services/human-resources",
    "/government-services/identity-citizenship",
    "/government-services/municipalities-transport",
    "/government-services/notary-services",
    "/government-services/traffic-licensing",
  ];

  const licenses = [
    "/licenses",
    "/licenses/abu-dhabi-trader",
    "/licenses/commercial",
    "/licenses/creative",
    "/licenses/freelance",
  ];

  const services = [
    "/services",
    "/services/advertising-marketing",
    "/services/content-creation",
    "/services/graphic-design-branding",
    "/services/social-media-management",
  ];

  const allPages = [
    ...staticPages,
    ...governmentServices,
    ...licenses,
    ...services,
  ];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
