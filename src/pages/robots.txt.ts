import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
${import.meta.env.VERCEL_ENV !== 'preview' ? `Allow: /

Sitemap: ${sitemapURL.href}` : 'Disallow: /'}`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};
