import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./site-config";
import { LanguageProvider } from "./components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "International Trade and Development",
  keywords: [
    "trading internacional",
    "logística internacional",
    "desarrollo de negocios B2B",
    "commodities",
    "materias primas",
    "insumos agrícolas",
    "supply chain",
    "comercio exterior",
    "América del Sur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: "es_ES",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logosca-removebg-preview.png", type: "image/png" }],
    shortcut: "/logosca-removebg-preview.png",
    apple: "/logosca-removebg-preview.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logosca-removebg-preview.png`,
  description: siteConfig.description,
  slogan: siteConfig.slogan,
  telephone: "+1-332-231-7618",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7345 W Sand Lake Rd, Ste 210, Office 3648",
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32819",
    addressCountry: "US",
  },
  areaServed: ["Paraguay", "Uruguay", "Argentina", "Bolivia", "Brazil"],
  knowsAbout: [
    "International trading",
    "Logistics and supply chain",
    "Business development",
    "Commodities",
    "Agricultural and industrial inputs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
