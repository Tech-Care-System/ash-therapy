import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ash-therapy.com';
  
  // Since it's a single page application structure driven by sections
  // we primarily list the root. If there are other pages in the future, add them here.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
