'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { translations } from '@/lib/translations';

const MENU_FILENAMES: Record<string, { filename: string; fallback: string }> = {
  mittagstisch: { filename: 'Mittagstisch.pdf', fallback: '/Mittagstisch.pdf' },
  speisekarte: { filename: 'Speisekarte Porto Cervo.pdf', fallback: '/SPEISEKARTE KOMPLETT dezember2 2025 Kopie.pdf' },
  empfehlungskarte: { filename: 'Empfehlungskarte Porto Cervo.pdf', fallback: '/empfehlungskarte.pdf' },
};

const MENU_IDS = ['mittagstisch', 'speisekarte', 'empfehlungskarte'] as const;

export default function SpeisekartenClient() {
  const [active, setActive] = useState<string | null>(null);
  const [pdfUrls, setPdfUrls] = useState<Record<string, string>>({});
  const [isMobile, setIsMobile] = useState(false);
  const { lang } = useLang();
  const tr = translations[lang].speisekarten;

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(ua));

    const hash = window.location.hash.replace('#', '');
    const match = MENU_IDS.find((id) => id === hash);
    setActive(match ?? null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    fetch('/api/admin/menu-urls', { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => setPdfUrls(data))
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
  }, []);

  const menus = MENU_IDS.map((id) => ({
    id,
    title: tr.menus[id].title,
    description: tr.menus[id].description,
    cardDesc: tr.menus[id].cardDesc,
    filename: MENU_FILENAMES[id].filename,
    file: pdfUrls[id] || MENU_FILENAMES[id].fallback,
  }));

  const visibleMenus = active ? menus.filter((m) => m.id === active) : menus;
  const activeMenu = menus.find((m) => m.id === active);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-[#c9a961] hover:text-[#b8963a] transition-colors">
            {tr.back}
          </Link>
          {active && (
            <button onClick={() => setActive(null)} className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              {tr.showAll}
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a961]" />
            <span className="text-[#c9a961] text-sm tracking-[0.3em] uppercase font-light">{tr.tagline}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a961]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {activeMenu ? activeMenu.title : tr.title}
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            {activeMenu ? activeMenu.description : tr.subtitle}
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
                {tr.all}
              </button>
            )}
          </div>
        </div>

        {/* PDF Cards */}
        <div className={`grid gap-8 mb-16 ${visibleMenus.length === 1 ? 'max-w-2xl mx-auto' : visibleMenus.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {visibleMenus.map((menu) => (
            <div
              key={menu.id}
              id={menu.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* PDF Viewer */}
              {isMobile ? (
                /* Mobile: iframe doesn't work on iOS — show a full-width open button instead */
                <a
                  href={menu.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-center justify-center gap-4 py-12 px-6 bg-gray-50 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c9a961]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#c9a961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium text-lg mb-1">{menu.title}</p>
                    <p className="text-gray-500 text-sm">{tr.tapToOpen}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 bg-[#c9a961] text-white px-7 py-3 rounded-full text-sm font-medium tracking-wider uppercase shadow">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {tr.openMenu}
                  </span>
                </a>
              ) : (
                <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] bg-gray-50">
                  <iframe
                    src={`${menu.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full"
                    title={menu.title}
                  />
                </div>
              )}

              {/* Card Footer */}
              <div className="p-4 md:p-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-1">{menu.title}</h2>
                  <p className="text-gray-500 text-sm">{menu.cardDesc}</p>
                </div>
                <a
                  href={menu.file}
                  download={menu.filename}
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b8963a] text-white px-5 py-3 rounded-full text-sm tracking-wider uppercase font-medium transition-all duration-300 shadow hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {tr.download}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="hover:text-[#c9a961] transition-colors">{tr.footer.home}</Link>
          <span>·</span>
          <Link href="/impressum" className="hover:text-[#c9a961] transition-colors">{tr.footer.imprint}</Link>
          <span>·</span>
          <Link href="/datenschutz" className="hover:text-[#c9a961] transition-colors">{tr.footer.privacy}</Link>
        </div>
      </footer>
    </div>
  );
}
