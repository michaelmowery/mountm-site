import { getCollection } from 'astro:content';
const SITE = 'https://mountm.tech';
export async function GET() {
  const projects = await getCollection('projects');
  const paths = ['/', '/work/', '/services/', '/about/', '/contact/', ...projects.map(p => `/work/${p.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(p => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
