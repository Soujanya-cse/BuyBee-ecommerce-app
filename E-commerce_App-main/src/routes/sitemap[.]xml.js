import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES, PRODUCTS } from "@/data/products";
const BASE_URL = "";
export const Route = createFileRoute("/sitemap.xml")({
    server: {
        handlers: {
            GET: async () => {
                const entries = [
                    { path: "/", changefreq: "daily", priority: "1.0" },
                    { path: "/shop", changefreq: "daily", priority: "0.9" },
                    { path: "/deals", changefreq: "daily", priority: "0.8" },
                    { path: "/about", changefreq: "monthly", priority: "0.5" },
                    { path: "/contact", changefreq: "monthly", priority: "0.5" },
                    { path: "/faq", changefreq: "monthly", priority: "0.5" },
                    ...CATEGORIES.map(c => ({ path: `/category/${c.slug}`, changefreq: "weekly", priority: "0.7" })),
                    ...PRODUCTS.map(p => ({ path: `/product/${p.id}`, changefreq: "weekly", priority: "0.6" })),
                ];
                const urls = entries.map(e => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`);
                const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
                return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
            },
        },
    },
});
