# SMTP-Konfiguration für Portocervo Restaurant - Gmail Setup

## ✅ Einfache Gmail-Integration (Empfohlen)

Das Reservierungssystem nutzt jetzt Gmail direkt - super einfach!

---

## 🚀 Schnellstart: Gmail einrichten (5 Minuten)

### Schritt 1: Gmail App-Passwort erstellen

1. **Gehe zu:** https://myaccount.google.com/apppasswords
2. **Wähle:** "Mail" und "Anderes Gerät"  
3. **Gerätename:** Trage ein: "Portocervo Website"
4. **Passwort kopieren:** Google zeigt dir ein 16-stelliges Passwort wie:  
   `abcd efgh ijkl mnop`

**Wichtig:**  
- Du brauchst **2-Faktor-Authentifizierung** aktiviert
- Falls du den Link nicht findest: Google → Konto → Sicherheit → App-Passwörter

---

### Schritt 2: `.env.local` Datei erstellen

Öffne das Projekt und bearbeite die Datei `.env.local`:

```env
SMTP_USER=deine-gmail@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
```

**Ersetze:**
- `deine-gmail@gmail.com` → Deine echte Gmail-Adresse
- `abcd efgh ijkl mnop` → Das 16-stellige App-Passwort von Schritt 1

---

### Schritt 3: Server neu starten

```bash
# Im Terminal: Strg+C drücken, dann:
npm run dev
```

---

### Schritt 4: Testen! 🎉

1. Öffne http://localhost:3000
2. Scrolle zum Reservierungsformular
3. Fülle es aus und sende ab
4. **Prüfe dein Gmail-Postfach** - die E-Mail sollte ankommen!

---

## 📧 Was passiert beim Reservieren?

Wenn ein Gast reserviert, erhältst du eine **schön formatierte E-Mail** mit:

```
🍽️ NEUE RESERVIERUNGSANFRAGE - Restaurant Portocervo

👤 KONTAKTDATEN:
Name:     Max Mustermann
E-Mail:   max@example.com
Telefon:  0123 456789

📅 RESERVIERUNGSDETAILS:
Datum:           15.03.2026
Uhrzeit:         19:00 Uhr
Anzahl Personen: 4

💬 NACHRICHT: (falls vorhanden)
Fensterplatz bevorzugt

📧 Anfrage eingegangen am: 20. Januar 2026, 15:30 Uhr
```

---

## 🔧 Troubleshooting

### Problem: "Authentication failed"
**Lösung:** Du verwendest wahrscheinlich dein normales Gmail-Passwort.  
→ Verwende das **App-Passwort** von Schritt 1!

### Problem: "Invalid login"
**Lösung:** App-Passwort falsch eingetragen.  
→ Erstelle ein neues App-Passwort und kopiere es EXAKT (inkl. Leerzeichen)

### Problem: E-Mail kommt nicht an
**Lösung:**  
1. Prüfe den **Spam-Ordner**
2. Prüfe die Terminal-Ausgabe für Fehlermeldungen
3. Stelle sicher, dass `SMTP_USER` = deine Gmail-Adresse ist

### Problem: "2-Faktor-Authentifizierung erforderlich"
**Lösung:**  
1. Gehe zu https://myaccount.google.com/security
2. Aktiviere "Bestätigung in zwei Schritten"
3. Warte 5 Minuten
4. Erstelle dann das App-Passwort

---

## 🌐 Production (Vercel Deployment)

Wenn du die Website live stellen möchtest:

### 1. Vercel Dashboard öffnen
https://vercel.com → Dein Projekt → Settings

### 2. Environment Variables hinzufügen
```
SMTP_USER = deine-gmail@gmail.com
SMTP_PASSWORD = dein-16-stelliges-app-passwort
```

### 3. Redeploy
Vercel deployt automatisch neu - fertig!

---

## ⚠️ Wichtige Hinweise

- ✅ **Sicher:** Das App-Passwort ist NUR für diese Website
- ✅ **Privat:** `.env.local` ist bereits im `.gitignore`
- ✅ **Einfach:** Gmail ist kostenlos und funktioniert sofort
- ⚠️ **Limit:** Gmail erlaubt ~500 E-Mails pro Tag (mehr als genug!)

---

## 🎯 Beispiel: Vollständige `.env.local`

### Für Tests (E-Mails gehen an dich):

```env
# Deine echte Gmail-Adresse
SMTP_USER=deine-email@gmail.com

# Das App-Passwort von Google (16 Zeichen)
SMTP_PASSWORD=abcd efgh ijkl mnop
```

**Das war's!** Alle Reservierungen kommen in deinem Gmail-Postfach an.

---

### Später (E-Mails gehen an Restaurant):

Wenn du die E-Mail-Adresse vom Restaurant hast, füge einfach hinzu:

```env
# Deine Gmail (für Versand)
SMTP_USER=deine-email@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop

# Restaurant-E-Mail (Empfänger)
MAIL_TO=reservierungen@portocervo-saarlouis.de
```

Jetzt gehen alle Reservierungen an das Restaurant! �

---

## 📞 Support

Falls es nicht funktioniert:
1. Prüfe die Konsole (wo `npm run dev` läuft) für Fehlermeldungen
2. Stelle sicher, dass die Gmail-Adresse korrekt ist
3. Erstelle ein neues App-Passwort, falls nötig
