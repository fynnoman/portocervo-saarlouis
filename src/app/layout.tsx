import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConsentProvider } from "@/components/CookieBanner";

const storyScript = localFont({
  src: "../../public/fonts/StoryScript-Regular.ttf",
  variable: "--font-storyscript",
  weight: "400",
});

export const metadata: Metadata = {
  // Basis Meta
  title: {
    default: "Restaurant Portocervo Saarlouis | Italienisches Restaurant",
    template: "%s | Restaurant Portocervo Saarlouis",
  },
  description:
    "Restaurant Portocervo in Saarlouis – Authentische italienische Küche, Pizza, Pasta & mehr. Genießen Sie mediterrane Spezialitäten in elegantem Ambiente. Reservierung unter 06831 2747.",
  keywords: [
    "Restaurant Saarlouis",
    "Italienisches Restaurant Saarlouis",
    "Portocervo Saarlouis",
    "Restaurant Portocervo",
    "Italiener Saarlouis",
    "Pizza Saarlouis",
    "Pasta Saarlouis",
    "Essen Saarlouis",
    "Restaurant Saarland",
    "Italienische Küche Saarlouis",
    "Mittagstisch Saarlouis",
    "Reservierung Restaurant Saarlouis",
    "Mediterrane Küche Saarlouis",
    "Lothringer Straße Saarlouis",
    "Live Musik Restaurant Saarlouis",
    "Italienischer Abend Saarlouis",
  ],

  // Canonical & Alternate
  metadataBase: new URL("https://www.portocervo-saarlouis.de"),
  alternates: {
    canonical: "/",
  },

  // Open Graph (Facebook, WhatsApp, etc.)
  openGraph: {
    title: "Restaurant Portocervo Saarlouis | Italienisches Restaurant",
    description:
      "Authentische italienische Küche in Saarlouis. Pizza, Pasta & mediterrane Spezialitäten in elegantem Ambiente. Reservieren Sie unter 06831 2747.",
    url: "https://www.portocervo-saarlouis.de",
    siteName: "Restaurant Portocervo Saarlouis",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/68A7E866-182F-4531-9864-52187EC82259.jpeg",
        width: 1200,
        height: 630,
        alt: "Restaurant Portocervo Saarlouis – Italienisches Restaurant",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Portocervo Saarlouis | Italienisches Restaurant",
    description:
      "Authentische italienische Küche in Saarlouis. Pizza, Pasta & mediterrane Spezialitäten. Reservierung: 06831 2747.",
    images: ["/68A7E866-182F-4531-9864-52187EC82259.jpeg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (bei Bedarf anpassen)
  // verification: {
  //   google: "DEIN_GOOGLE_VERIFICATION_CODE",
  // },

  // Weitere Meta
  category: "restaurant",
  creator: "Restaurant Portocervo",
  publisher: "Restaurant Portocervo Saarlouis",
};

// JSON-LD Structured Data für Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Porto Cervo Saarlouis",
  alternateName: "Portocervo Saarlouis",
  description:
    "Authentische italienische Küche in Saarlouis. Pizza, Pasta und mediterrane Spezialitäten in elegantem Ambiente.",
  url: "https://www.portocervo-saarlouis.de",
  telephone: "+49-6831-2747",
  email: "portocervo.saarlouis@gmail.com",
  image: "https://www.portocervo-saarlouis.de/68A7E866-182F-4531-9864-52187EC82259.jpeg",
  logo: "https://www.portocervo-saarlouis.de/5B1A6C9C-63E8-41CF-9807-EB9CC5DCA576.png",
  priceRange: "€€",
  servesCuisine: ["Italian", "Mediterranean", "Pizza", "Pasta"],
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lothringer Str. 1",
    addressLocality: "Saarlouis",
    addressRegion: "Saarland",
    postalCode: "66740",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.3134,
    longitude: 6.7528,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
      opens: "18:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: "Speisekarte",
    description: "Italienische Spezialitäten, Pizza, Pasta und mehr",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Außenbereich", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kinderspeisekarte", value: true },
    { "@type": "LocationFeatureSpecification", name: "Reservierung", value: true },
    { "@type": "LocationFeatureSpecification", name: "Live Musik", value: true },
  ],
  sameAs: [],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.portocervo-saarlouis.de/#reservation",
    },
    result: {
      "@type": "Reservation",
      name: "Tischreservierung",
    },
  },
};

// JSON-LD für lokale Suche (LocalBusiness)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.portocervo-saarlouis.de",
  name: "Restaurant Portocervo Saarlouis",
  description: "Italienisches Restaurant in Saarlouis mit authentischer Küche, Live Musik und italienischen Abenden.",
  telephone: "+49-6831-2747",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lothringer Str. 1",
    addressLocality: "Saarlouis",
    addressRegion: "Saarland",
    postalCode: "66740",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.3134,
    longitude: 6.7528,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 49.3134,
      longitude: 6.7528,
    },
    geoRadius: "30000",
  },
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/* Geo Meta Tags */}
        <meta name="geo.region" content="DE-SL" />
        <meta name="geo.placename" content="Saarlouis" />
        <meta name="geo.position" content="49.3134;6.7528" />
        <meta name="ICBM" content="49.3134, 6.7528" />
      </head>
      <body className={`${storyScript.variable} antialiased`}>
        <ConsentProvider>
          {children}
        </ConsentProvider>
      </body>
    </html>
  );
}
