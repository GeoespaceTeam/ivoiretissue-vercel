import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // 如果有后台路由，写在这里屏蔽掉
    },
    sitemap: 'https://ivoiretissue.com/sitemap.xml',
  };
}