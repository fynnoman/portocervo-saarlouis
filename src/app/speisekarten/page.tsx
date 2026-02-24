import type { Metadata } from "next";
import SpeisekartenClient from "./SpeisekartenClient";

export const metadata: Metadata = {
  title: "Speisekarten – Mittagstisch & Abendkarte | Restaurant Portocervo Saarlouis",
  description:
    "Die Speisekarten des Restaurant Portocervo Saarlouis: Täglich frischer Mittagstisch, vollständige Abendkarte mit Pizza, Pasta, Fleisch & Fisch sowie unsere aktuellen Empfehlungen.",
  keywords: [
    "Speisekarte Portocervo Saarlouis",
    "Mittagstisch Saarlouis",
    "Pizza Saarlouis",
    "Pasta Saarlouis",
    "Menükarte Saarlouis",
    "Italienische Speisekarte Saarlouis",
  ],
  alternates: {
    canonical: "/speisekarten",
  },
  openGraph: {
    title: "Speisekarten – Restaurant Portocervo Saarlouis",
    description: "Mittagstisch, Abendkarte und Empfehlungen – authentische italienische Küche in Saarlouis.",
    url: "https://www.portocervo-saarlouis.de/speisekarten",
    siteName: "Restaurant Portocervo Saarlouis",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Speisekarten() {
  return <SpeisekartenClient />;
}
