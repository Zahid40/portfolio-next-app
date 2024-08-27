export default function robots() {
    return {
      rules: [
        {
          userAgent: 'Googlebot',
          allow: ['/'],
        },
        {
          userAgent: ['Applebot', 'Bingbot'],
          allow: ['/'],
        },
      ],
      sitemap: 'https://zahid.vercel.app/sitemap.xml',
    }
  }