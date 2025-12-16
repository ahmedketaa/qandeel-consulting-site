export async function GET() {
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

  const urlsXml = allPages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
