import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MyEmail, MyPhone, appname, description, keywords, url , shemaorgstructuredData } from "@/const";
import { GoogleTagManager , GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(url),

  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon.png" },
      new URL("/icons/icon.png", url),
      { url: "/icons/icon.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/icons/shortcut-icon.png"],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icons/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  msapplication: {
    TileColor: "#da532c",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="8OyoDbF2gfcjV73DYpgydlF_GBOTVd0OyultE8LcBBU" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(shemaorgstructuredData), 
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-TJJWRSRX" />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-6WW309XPJ9" />
    </html>
  );
}
