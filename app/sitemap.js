export default function sitemap() {
    const site = "https://zahid.vercel.app"
    return [
      {
        url: site,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      }
    ]
  }