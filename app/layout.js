import localFont  from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const productSans = localFont({
  src: [
    {
      path: './fonts/ProductSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/ProductSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/ProductSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/ProductSans-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/ProductSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/ProductSans-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const metadata = {
  title: "Zahid - Portfolio",
  description: "Designing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Zahid's portfolio showcasing design skills and projects." />
        <meta name="author" content="Zahid" />
        <meta name="keywords" content="portfolio, design, Zahid, web design, graphic design, projects" />
        
        <meta property="og:title" content="Zahid - Portfolio" />
        <meta property="og:description" content="Designing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zahid.vercel.app" />
        <meta property="og:image" content="https://zahid.vercel.app/zahid_image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zahid - Portfolio" />
        <meta name="twitter:description" content="Designing" />
        <meta name="twitter:image" content="https://zahid.vercel.app/zahid_image.png" />
        
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        
        <title>Zahid - Portfolio</title>
      </head>
      <body className={productSans.className}>
        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full min-w-80">
            <Navbar />
            {children}
            {/* <SpeedInsights /> */}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
