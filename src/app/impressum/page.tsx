import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Restaurant Portocervo in Saarlouis – Angaben gemäß § 5 TMG.",
  robots: { index: true, follow: true },
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="text-[#c9a961] hover:text-[#b8963a] transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-10 border-b border-[#c9a961] pb-4">
          Impressum
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Porto Cervo Saarlouis<br />
              Inh. Behar Dura<br />
              Lothringer Str. 1<br />
              66740 Saarlouis<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:068312747" className="text-[#c9a961] hover:underline">06831 2747</a><br />
              E-Mail: <a href="mailto:portocervo.saarlouis@gmail.com" className="text-[#c9a961] hover:underline">portocervo.saarlouis@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Behar Dura<br />
              Lothringer Str. 1<br />
              66740 Saarlouis
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a961] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="hover:text-[#c9a961] transition-colors">Startseite</Link>
          <span>·</span>
          <Link href="/impressum" className="text-[#c9a961]">Impressum</Link>
          <span>·</span>
          <Link href="/datenschutz" className="hover:text-[#c9a961] transition-colors">Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
