import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://baseaim.com'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/business-process-automation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-consulting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries/healthcare`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/real-estate`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries/ecommerce`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}