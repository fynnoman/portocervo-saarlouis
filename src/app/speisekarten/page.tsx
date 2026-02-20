import type { Metadata } from "next";
import SpeisekartenClient from "./SpeisekartenClient";

export const metadata: Metadata = {
  title: "Speisekarten – Porto Cervo Saarlouis",
  description: "Unsere Speisekarten: Mittagstisch und vollständige Abendkarte des Restaurant Porto Cervo in Saarlouis.",
  robots: { index: true, follow: true },
};

export default function Speisekarten() {
  return <SpeisekartenClient />;
}
