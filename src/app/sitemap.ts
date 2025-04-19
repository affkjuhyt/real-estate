import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://real-estate-lyart-one.vercel.app';
  const routes = [
    '',
    '/about-us',
    '/services',
    '/fix-flip',
    '/bridge-loan',
    '/ground-up-construction',
    '/dscr',
    '/dscr-foreign',
    '/contact-us',
  ];
  
  const locales = ['en', 'vi'];
  
  return routes.flatMap(route => 
    locales.map(locale => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    }))
  );
}