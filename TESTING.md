# Reservierungssystem - Test Guide

## Schnellstart

### 1. SMTP-Konfiguration (für Tests)

#### Option A: Gmail (für lokale Tests)

1. Google-Konto verwenden
2. "App-Passwort" erstellen (nicht normales Passwort!)
   - Gehe zu: https://myaccount.google.com/apppasswords
   - Erstelle neues App-Passwort
3. In `.env.local` eintragen:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=deine-email@gmail.com
SMTP_PASS=dein-app-passwort-hier

MAIL_TO=empfaenger@example.com
MAIL_FROM="Test Restaurant" <deine-email@gmail.com>
MAIL_REPLYTO_DEFAULT=deine-email@gmail.com
```

#### Option B: SendGrid (kostenlos, empfohlen)

1. Account bei SendGrid erstellen: https://sendgrid.com
2. API Key erstellen
3. In `.env.local` eintragen:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=dein-sendgrid-api-key

MAIL_TO=reservierungen@restaurant.de
MAIL_FROM="Restaurant Name" <noreply@deine-domain.de>
MAIL_REPLYTO_DEFAULT=info@restaurant.de
```

#### Option C: Mailtrap (für Development, keine echten E-Mails)

Perfekt zum Testen ohne echte E-Mails zu versenden!

1. Account bei Mailtrap erstellen: https://mailtrap.io
2. SMTP-Credentials kopieren
3. In `.env.local` eintragen:

```env
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER=dein-mailtrap-username
SMTP_PASS=dein-mailtrap-password

MAIL_TO=test@restaurant.de
MAIL_FROM="Test Restaurant" <noreply@restaurant.de>
MAIL_REPLYTO_DEFAULT=info@restaurant.de
```

### 2. Development Server starten

```bash
npm run dev
```

### 3. Formular testen

Öffne: http://localhost:3000

Scrolle zum Reservierungsformular und fülle es aus:
- Name: Max Mustermann
- E-Mail: deine-test-email@example.com
- Telefon: 0123456789
- Datum: Ein Datum in der Zukunft
- Uhrzeit: z.B. 19:00
- Personen: 4
- Nachricht: Optional

### 4. API direkt testen (ohne Frontend)

#### Mit curl:

```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0123456789",
    "date": "2026-03-15",
    "time": "19:00",
    "guests": "4",
    "message": "Test-Reservierung"
  }'
```

Erwartete Antwort bei Erfolg:
```json
{
  "ok": true,
  "message": "Reservierungsanfrage erfolgreich gesendet"
}
```

#### Mit Node.js:

```javascript
const response = await fetch('http://localhost:3000/api/reservation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '0123456789',
    date: '2026-03-15',
    time: '19:00',
    guests: '4',
    message: 'Test-Reservierung'
  })
});

const result = await response.json();
console.log(result);
```

## Tests

### ✅ Validierungs-Tests

#### Ungültiger Name (zu kurz):
```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{"name":"A","email":"test@example.com","phone":"0123456789","date":"2026-03-15","time":"19:00","guests":"4"}'
```
Erwartet: `400 Bad Request` mit Fehler "Name muss mindestens 2 Zeichen lang sein"

#### Ungültige E-Mail:
```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"ungültig","phone":"0123456789","date":"2026-03-15","time":"19:00","guests":"4"}'
```
Erwartet: `400 Bad Request` mit Fehler "Ungültige E-Mail-Adresse"

#### Datum in der Vergangenheit:
```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"0123456789","date":"2020-01-01","time":"19:00","guests":"4"}'
```
Erwartet: `400 Bad Request` mit Fehler "Reservierungsdatum muss in der Zukunft liegen"

#### Zu viele Gäste:
```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"0123456789","date":"2026-03-15","time":"19:00","guests":"50"}'
```
Erwartet: `400 Bad Request` mit Fehler "Anzahl der Gäste muss zwischen 1 und 20 liegen"

### ✅ Rate Limiting Test

Sende mehr als 5 Anfragen innerhalb von 10 Minuten:

```bash
for i in {1..7}; do
  echo "Request $i:"
  curl -X POST http://localhost:3000/api/reservation \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","phone":"0123456789","date":"2026-03-15","time":"19:00","guests":"4"}'
  echo "\n"
done
```

Ab Request 6 sollte `429 Too Many Requests` zurückkommen.

### ✅ Honeypot (Bot-Schutz) Test

```bash
curl -X POST http://localhost:3000/api/reservation \
  -H "Content-Type: application/json" \
  -d '{"name":"Bot","email":"bot@example.com","phone":"0123456789","date":"2026-03-15","time":"19:00","guests":"4","honeypot":"I am a bot"}'
```

Erwartet: `200 OK` aber keine E-Mail wird gesendet (silent drop)

## Troubleshooting

### Problem: "SMTP configuration incomplete"
**Lösung:** Überprüfe `.env.local` - alle SMTP-Variablen müssen gesetzt sein

### Problem: "Authentication failed"
**Lösung:** 
- Gmail: Verwende App-Passwort, nicht normales Passwort
- Andere: Überprüfe Username/Passwort

### Problem: E-Mails kommen nicht an
**Lösung:**
- Prüfe Spam-Ordner
- Bei Gmail: Prüfe "Weniger sichere Apps" Einstellungen
- Verwende Mailtrap für sicheres Testen ohne echte E-Mails

### Problem: "connect ETIMEDOUT"
**Lösung:**
- Firewall/VPN könnte SMTP-Port blockieren
- Versuche anderen Port (z.B. 465 mit SMTP_SECURE=true)

### Problem: Rate Limit schlägt sofort zu
**Lösung:**
- Warte 10 Minuten
- Oder: Server neu starten (löscht in-memory Rate Limit)

## E-Mail-Vorschau

Nach erfolgreicher Reservierung werden 2 E-Mails versendet:

### 1. An Restaurant (MAIL_TO):
- **Betreff:** "Neue Reservierung: 2026-03-15 19:00 – Max Mustermann (4 Personen)"
- **Inhalt:** Alle Reservierungsdetails inkl. Kontaktdaten
- **Reply-To:** E-Mail des Gastes

### 2. An Gast (data.email):
- **Betreff:** "Ihre Reservierungsanfrage bei Portocervo"
- **Inhalt:** Bestätigung mit wichtigem Hinweis über Bestätigungspflicht
- **Reply-To:** MAIL_REPLYTO_DEFAULT (Restaurant)

## Production Checklist

Vor dem Live-Gang:

- [ ] `.env.local` mit echten SMTP-Daten befüllen
- [ ] MAIL_FROM auf Restaurant-Domain setzen
- [ ] SPF-Record für Domain konfigurieren
- [ ] DKIM aktivieren
- [ ] DMARC-Policy einrichten
- [ ] E-Mail-Monitoring einrichten
- [ ] Rate Limit auf Redis umstellen (für mehrere Server)
- [ ] CAPTCHA hinzufügen (optional, bei viel Traffic)
- [ ] Error-Logging zu Service (Sentry, LogRocket, etc.)
- [ ] Test-Reservierung durchführen
- [ ] Bestätigen, dass E-Mails ankommen (nicht im Spam)
