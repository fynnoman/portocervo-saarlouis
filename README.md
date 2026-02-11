# Portocervo Restaurant Website

Eine elegante, cleane Website für das italienische Restaurant Portocervo in Saarlouis.

## Über das Projekt

Diese Website wurde mit modernen Web-Technologien erstellt und präsentiert das Restaurant Portocervo mit einem minimalistischen, zeitlosen Design in Weiß mit dezenten Gold-Akzenten.

## Features

- ✨ Elegantes, cleanes Design
- 🍽️ Restaurant-Informationen und Öffnungszeiten
- 👨‍👩‍👧‍👦 Serviceoptionen (Sitzplätze im Freien, Kinderspeisekarte)
- 🎉 Events & Veranstaltungen-Sektion
- 📝 Reservierungsformular mit Bestätigungshinweis
- 🎨 Framer Motion Animationen
- 📱 Voll responsiv
- 🔤 Google Fonts Integration (Playfair Display & Lato)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Schriften:** Google Fonts (Playfair Display, Lato)
- **E-Mail:** Nodemailer (für Reservierungsbestätigungen)

## Getting Started

### Installation

```bash
npm install
```

### Umgebungsvariablen konfigurieren

Kopieren Sie `.env.local.example` nach `.env.local` und tragen Sie Ihre SMTP-Daten ein:

```bash
cp .env.local.example .env.local
```

Bearbeiten Sie `.env.local` mit Ihren SMTP-Zugangsdaten:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

MAIL_TO=reservierungen@portocervo-saarlouis.de
MAIL_FROM="Ristorante Portocervo" <no-reply@portocervo-saarlouis.de>
MAIL_REPLYTO_DEFAULT=info@portocervo-saarlouis.de
```

**Empfohlene SMTP-Anbieter:**
- Gmail (für Tests, begrenzt)
- SendGrid (kostenlos bis 100 E-Mails/Tag)
- Mailgun
- AWS SES
- Postmark

### Development Server starten

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

### Build für Production

```bash
npm run build
npm start
```

## Projekt-Struktur

```
src/
├── app/
│   ├── api/
│   │   └── reservation/
│   │       └── route.ts    # API Route für Reservierungen
│   ├── layout.tsx          # Root Layout mit Google Fonts
│   ├── page.tsx            # Hauptseite
│   └── globals.css         # Globale Styles
└── components/
    ├── Hero.tsx              # Hero-Sektion
    ├── Services.tsx          # Serviceoptionen
    ├── OpeningHours.tsx      # Öffnungszeiten
    ├── Events.tsx            # Events & Feiern
    ├── ReservationForm.tsx   # Reservierungsformular
    └── Footer.tsx            # Footer
```

## Reservierungssystem

Das Reservierungsformular sendet E-Mails über Nodemailer:

- **Restaurant-Benachrichtigung:** Sofortige E-Mail an das Restaurant mit allen Reservierungsdetails
- **Gäste-Bestätigung:** Automatische Bestätigungsmail an den Gast mit wichtigem Hinweis
- **Sicherheit:** Rate Limiting, Honeypot-Feld, Input-Validierung
- **Bot-Schutz:** Verstecktes Feld fängt automatische Bots ab

### API-Endpunkt testen

Mit curl:

```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Max Mustermann",
    "email": "max@example.com",
    "phone": "0123456789",
    "date": "2026-02-15",
    "time": "19:00",
    "guests": "4",
    "message": "Fensterplatz gewünscht"
  }'
```

Mit JavaScript/fetch:

```javascript
const response = await fetch('/api/reservation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Max Mustermann',
    email: 'max@example.com',
    phone: '0123456789',
    date: '2026-02-15',
    time: '19:00',
    guests: '4',
    message: 'Fensterplatz gewünscht'
  })
});

const result = await response.json();
console.log(result);
```

## Restaurant-Informationen

**Portocervo**  
Lothringer Str. 1  
66740 Saarlouis  
Tel: 06831 2747

**Öffnungszeiten:**
- Dienstag: Geschlossen
- Mittwoch–Montag: 11:30–14:30, 18:00–22:00

## Design-Philosophie

Das Design folgt einem cleanen, eleganten Ansatz:
- Minimalistisch und zeitlos, nicht zu neumodisch
- Weiße Hauptfarbe mit dezenten Gold-Akzenten (#c9a961)
- Wenig Bilder, Fokus auf Inhalt und Typografie
- Subtile Animationen mit Framer Motion
- Klassische Schriftkombination: Playfair Display (Headlines) & Lato (Body)

## E-Mail Deliverability

Für optimale E-Mail-Zustellbarkeit empfehlen wir:

1. **SPF-Record** für Ihre Domain einrichten
2. **DKIM** Signierung aktivieren
3. **DMARC** Policy konfigurieren
4. **Sender-Domain** sollte mit der Restaurant-Domain übereinstimmen
5. **Reverse DNS** für bessere Reputation einrichten

Diese Einstellungen erfolgen bei Ihrem Domain- und Hosting-Provider.

## Sicherheit

- ✅ Keine SMTP-Credentials im Client
- ✅ Server-side Input-Validierung
- ✅ Rate Limiting (5 Anfragen pro 10 Minuten pro IP)
- ✅ Honeypot-Feld gegen Bots
- ✅ XSS-Schutz durch Input-Sanitierung

## Production Deployment

Vor dem Deployment:

1. ✅ `.env.local` mit echten SMTP-Daten befüllen
2. ✅ SPF/DKIM/DMARC konfigurieren
3. ✅ MAIL_FROM auf Restaurant-Domain setzen
4. ✅ Monitoring für E-Mail-Zustellung einrichten
5. ✅ Eventuell Redis für besseres Rate Limiting

## Support

Bei Fragen zum Reservierungssystem kontaktieren Sie uns unter:
- E-Mail: info@portocervo-saarlouis.de
- Telefon: 06831 2747
