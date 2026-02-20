'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const menus = [
  {
    id: "mittagstisch",
    title: "Mittagstisch",
    description: "Täglich frische Mittagsgerichte – schnell, lecker und zu fairen Preisen.",
    file: "/Mittagstisch.pdf",
    filename: "Mittagstisch.pdf",
  },
  {
    id: "speisekarte",
    title: "Speisekarte",
    description: "Unsere vollständige Karte mit Pizza, Pasta, Fleisch, Fisch und Desserts.",
    file: "/SPEISEKARTE KOMPLETT dezember2 2025 Kopie.pdf",
    filename: "Speisekarte Porto Cervo.pdf",
  },
];

export default function SpeisekartenClient() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const match = menus.find((m) => m.id === hash);
    setActive(match ? match.id : null);
  }, []);

  const visibleMenus = active ? menus.filter((m) => m.id === active) : menus;
  const activeMenu = menus.find((m) => m.id === active);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-[#c9a961] hover:text-[#b8963a] transition-colors">
            ← Zurück zur Startseite
          </Link>
          {active && (
            <button
              onClick={() => setActive(null)}
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              Alle Karten anzeigen
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a961]" />
            <span className="text-[#c9a961] text-sm tracking-[0.3em] uppercase font-light">Porto Cervo</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a961]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {activeMenu ? activeMenu.title : 'Unsere Speisekarten'}
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            {activeMenu ? activeMenu.description : 'Hier finden Sie unsere aktuellen Karten zum Anschauen und Herunterladen.'}
          </p>

          {/* Tab switcher */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {menus.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(active === m.id ? null : m.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  active === m.id
                    ? 'bg-[#c9a961] text-white border-[#c9a961] shadow'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#c9a961] hover:text-[#c9a961]'
                }`}
              >
                {m.title}
              </button>
            ))}
            {active && (
              <button
                onClick={() => setActive(null)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border bg-white text-gray-400 border-gray-200 hover:text-gray-600"
              >
                Alle
              </button>
            )}
          </div>
        </div>

        {/* PDF Cards */}
        <div className={`grid gap-8 mb-16 ${visibleMenus.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
          {visibleMenus.map((menu) => (
            <div
              key={menu.id}
              id={menu.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* PDF Viewer */}
              <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] bg-gray-50">
                <iframe
                  src={`${menu.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full"
                  title={menu.title}
                />
              </div>

              {/* Card Footer */}
              <div className="p-4 md:p-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-1">{menu.title}</h2>
                  <p className="text-gray-500 text-sm">{menu.description}</p>
                </div>
                <a
                  href={menu.file}
                  download={menu.filename}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b8963a] text-white px-5 py-3 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-300 shadow hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
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
