import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung des Restaurant Portocervo Saarlouis gemäß DSGVO.",
  robots: { index: true, follow: true },
};

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
              Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
            <p className="font-medium">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="mt-1">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="font-medium mt-4">Wie erfassen wir Ihre Daten?</p>
            <p className="mt-1">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch das
              Ausfüllen des Reservierungsformulars). Andere Daten werden automatisch oder nach Ihrer
              Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <p className="font-medium mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p className="mt-1">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-medium mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p className="mt-1">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 603, San Francisco, California 94104,
              USA gehostet. Wenn Sie unsere Website besuchen, verarbeitet Vercel automatisch technische Daten
              wie IP-Adresse, Browsertyp und Betriebssystem. Details finden Sie in der Datenschutzerklärung von
              Vercel unter{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a961] hover:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              . Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46
              DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-3">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
              Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Verantwortliche Stelle</h3>
            <p>
              Porto Cervo Saarlouis<br />
              Inh. Behar Dura<br />
              Lothringer Str. 1<br />
              66740 Saarlouis<br />
              Telefon: <a href="tel:068312747" className="text-[#c9a961] hover:underline">06831 2747</a><br />
              E-Mail: <a href="mailto:portocervo.saarlouis@gmail.com" className="text-[#c9a961] hover:underline">portocervo.saarlouis@gmail.com</a>
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
              zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Rechtsgrundlagen der Verarbeitung</h3>
            <p>
              Soweit wir Ihre Einwilligung zur Verarbeitung personenbezogener Daten eingeholt haben, ist Art. 6
              Abs. 1 lit. a DSGVO die Rechtsgrundlage. Zur Erfüllung eines Vertrages oder vorvertraglicher
              Maßnahmen ist Art. 6 Abs. 1 lit. b DSGVO maßgeblich. Für gesetzliche Pflichten gilt Art. 6 Abs.
              1 lit. c DSGVO. Zur Wahrung berechtigter Interessen gilt Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Ihre Rechte</h3>
            <p>Sie haben folgende Rechte gemäß DSGVO:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Auskunft</strong> (Art. 15 DSGVO): Recht auf Auskunft über Ihre verarbeiteten Daten</li>
              <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Recht auf Korrektur unrichtiger Daten</li>
              <li><strong>Löschung</strong> (Art. 17 DSGVO): Recht auf Löschung Ihrer Daten</li>
              <li><strong>Einschränkung</strong> (Art. 18 DSGVO): Recht auf Einschränkung der Verarbeitung</li>
              <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Widerspruchsrecht gegen die Verarbeitung</li>
              <li><strong>Übertragbarkeit</strong> (Art. 20 DSGVO): Recht auf Datenübertragbarkeit</li>
              <li><strong>Widerruf</strong>: Einwilligungen können jederzeit widerrufen werden</li>
            </ul>
            <p className="mt-3">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die zuständige
              Behörde für das Saarland ist das Unabhängige Datenschutzzentrum Saarland (UDS):<br />
              <a
                href="https://www.datenschutz.saarland.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a961] hover:underline"
              >
                www.datenschutz.saarland.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-lg font-medium text-gray-800 mb-2">Cookies</h3>
            <p>
              Unsere Website verwendet technisch notwendige Cookies, um die Funktionalität der Website
              sicherzustellen. Dabei handelt es sich um kleine Textdateien, die Ihr Browser auf Ihrem Gerät
              speichert. Diese Cookies enthalten keine personenbezogenen Daten. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-3">
              Wir speichern Ihre Cookie-Präferenzen in einem Cookie namens „cookieConsent" mit einer
              Laufzeit von 365 Tagen.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten (Vercel) erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Darstellung
              der Website).
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Reservierungsformular (Airtable)</h3>
            <p>
              Wenn Sie über unser Reservierungsformular eine Tischreservierung anfragen, werden die von Ihnen
              eingegebenen Daten (Name, E-Mail-Adresse, Datum, Uhrzeit, Personenzahl) an den Dienst Airtable
              von Formagrid Inc. (Airtable), 155 5th Street, San Francisco, CA 94103, USA übermittelt und dort
              gespeichert.
            </p>
            <p className="mt-3">
              Airtable verarbeitet Ihre Daten in den USA. Die Übermittlung erfolgt auf Grundlage der
              EU-Standardvertragsklauseln (Art. 46 DSGVO). Weitere Informationen finden Sie in der
              Datenschutzerklärung von Airtable unter{" "}
              <a
                href="https://www.airtable.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a961] hover:underline"
              >
                https://www.airtable.com/privacy
              </a>
              .
            </p>
            <p className="mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung
              vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              der Verwaltung von Reservierungen).
            </p>
            <p className="mt-3">
              Ihre Reservierungsdaten werden nach Abschluss des Restaurantbesuchs gelöscht, soweit keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Externe Dienste</h2>

            <h3 className="text-lg font-medium text-gray-800 mb-2">Google Maps</h3>
            <p>
              Diese Website nutzt den Kartendienst Google Maps der Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
              IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert.
            </p>
            <p className="mt-3">
              Google Maps wird eingebunden, um Ihnen die Anfahrt zu unserem Restaurant zu erleichtern.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen zum Umgang mit
              Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a961] hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Google Fonts</h3>
            <p>
              Diese Seite nutzt lokal eingebundene Schriftarten. Es werden keine Daten an Google-Server
              übermittelt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
            <p className="mt-3 text-sm text-gray-500">Stand: Februar 2026</p>
          </section>

        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm mt-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="hover:text-[#c9a961] transition-colors">Startseite</Link>
          <span>·</span>
          <Link href="/impressum" className="hover:text-[#c9a961] transition-colors">Impressum</Link>
          <span>·</span>
          <Link href="/datenschutz" className="text-[#c9a961]">Datenschutz</Link>
        </div>
      </footer>
    </div>
  );
}
