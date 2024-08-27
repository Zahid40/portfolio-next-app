import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://zahid.vercel.app'),
  title: "Zahid 's Portfolio",
  description: "Zahid's portfolio showcasing design skills and projects.",
  authors: [{ name: 'Zahid' }],
  creator: 'Zahid',
  publisher: 'Zahid',
  keywords: ['Next.js', 'React', 'JavaScript'],

  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon.png' },
      new URL('/icons/icon.png', 'https://zahid.vercel.app'),
      { url: '/icons/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/icons/shortcut-icon.png'],
    apple: [
      { url: '/icons/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/icons/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/apple-touch-icon-precomposed.png',
      },
      { 
        rel: 'mask-icon', 
        url: '/icons/safari-pinned-tab.svg', 
        color: '#5bbad5' 
      },
    ],
  },
  msapplication: {
    TileColor: '#da532c',
  },
  manifest: '/site.webmanifest',



  openGraph: {
    title: "Zahid 's Portfolio",
    description: "Zahid's portfolio showcasing design skills and projects.",
    url: 'https://zahid.vercel.app',
    siteName: "Zahid 's Portfolio",
    images: '/images/ogimage.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zahid 's Portfolio",
    description: "Zahid's portfolio showcasing design skills and projects.",
    siteId: '1467726470533754880',
    creator: '@zahid',
    creatorId: '1467726470533754880',
    images: ['https://zahid.vercel.app/images/ogimage.png'], // Must be an absolute URL
  },
  

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <div className="flex items-center justify-center">
          <div className="max-w-[1440px] w-full min-w-80">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
              <SpeedInsights />
              <Footer />
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
