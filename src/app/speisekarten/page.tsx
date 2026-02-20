import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speisekarten – Porto Cervo Saarlouis",
  description: "Unsere Speisekarten: Mittagstisch und vollständige Abendkarte des Restaurant Porto Cervo in Saarlouis.",
  robots: { index: true, follow: true },
};

const menus = [
  {
    title: "Mittagstisch",
    description: "Täglich frische Mittagsgerichte – schnell, lecker und zu fairen Preisen.",
    file: "/Mittagstisch.pdf",
    filename: "Mittagstisch.pdf",
  },
  {
    title: "Speisekarte",
    description: "Unsere vollständige Karte mit Pizza, Pasta, Fleisch, Fisch und Desserts.",
    file: "/SPEISEKARTE KOMPLETT dezember2 2025 Kopie.pdf",
    filename: "Speisekarte Porto Cervo.pdf",
  },
];

export default function Speisekarten() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link href="/" className="text-[#c9a961] hover:text-[#b8963a] transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a961]" />
            <span className="text-[#c9a961] text-sm tracking-[0.3em] uppercase font-light">Porto Cervo</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a961]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Unsere Speisekarten
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Hier finden Sie unsere aktuellen Karten zum Anschauen und Herunterladen.
          </p>
        </div>

        {/* PDF Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {menus.map((menu) => (
            <div
              key={menu.title}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* PDF Viewer */}
              <div className="w-full h-[500px] md:h-[600px] bg-gray-50">
                <iframe
                  src={`${menu.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full"
                  title={menu.title}
                />
              </div>

              {/* Card Footer */}
              <div className="p-6 border-t border-gray-100">
                <h2 className="text-xl font-medium text-gray-900 mb-1">{menu.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{menu.description}</p>
                <a
                  href={menu.file}
                  download={menu.filename}
                  className="inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b8963a] text-white px-6 py-3 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-300 shadow hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Herunterladen
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="hover:text-[#c9a961] transition-colors">Startseite</Link>
          <span>·</span>
          <Link href="/impressum" className="hover:text-[#c9a961] transition-colors">Impressum</Link>
          <span>·</span>
          <Link href="/datenschutz" className="hover:text-[#c9a961] transition-colors">Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
