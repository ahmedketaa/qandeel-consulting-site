export async function GET() {
  const baseUrl = "https://qandeil.com"; 

  const pages = [
    "/", 
    "/about",
    "/contact",
    "/articles",
    "/location",

    // Services main pages
    "/government-services",
    "/licenses",
    "/services",
    "/legal-consulting",
    "/elrwasy",
  ];

  const urls = pages
    .map(
      (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
      </url>
    `
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
