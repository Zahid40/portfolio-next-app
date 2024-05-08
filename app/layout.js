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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body className={productSans.className}>
        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full min-w-80">
            <Navbar />
            {children}
            <SpeedInsights />
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
