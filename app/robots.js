export default function robots() {
  return {
    rules: [
      {
        userAgent: '*', // Allow all user agents
        allow: ['/'],
      },
    ],
    sitemap: 'https://zahid.vercel.app/sitemap.xml',
  };
}
