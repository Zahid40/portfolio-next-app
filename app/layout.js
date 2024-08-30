import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MyEmail, MyPhone, appname, description, keywords, url } from "@/const";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(url),
  title: appname,
  description: description,
  authors: [{ name: "Zahid" }],
  creator: "Zahid",
  publisher: "Zahid",
  keywords: keywords,

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

  openGraph: {
    title: appname,
    description: description,
    url: url,
    siteName: appname,
    images: "/images/ogimage.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: appname,
    description: description,
    creator: "@its_zahid83",
    images: [`${url}/images/ogimage.png`], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
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
      </body>
    </html>
  );
}
