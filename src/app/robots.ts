import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.portocervo-saarlouis.de/sitemap.xml',
    host: 'https://www.portocervo-saarlouis.de',
  };
}
