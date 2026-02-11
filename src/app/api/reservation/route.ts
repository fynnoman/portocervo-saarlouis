import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ============================================
// API ROUTE HANDLER - Reservierung senden
// ============================================

export async function POST(request: NextRequest) {
  try {
    // Schritt 1: Daten empfangen
    const { name, email, phone, date, time, guests, message } = await request.json();

    // Schritt 2: Validierung
    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus' },
        { status: 400 }
      );
    }

    // E-Mail-Format prüfen
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Schritt 3: Zeitstempel erstellen
    const timestamp = new Date().toLocaleString('de-DE', {
      timeZone: 'Europe/Berlin',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // Schritt 4: E-Mail-Inhalt formatieren (HTML-Version)
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #c9a961 0%, #a88b4a 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .section {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 6px;
            border-left: 4px solid #c9a961;
          }
          .section h2 {
            color: #c9a961;
            margin-top: 0;
            font-size: 18px;
          }
          .info-row {
            margin: 10px 0;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .label {
            display: inline-block;
            width: 140px;
            font-weight: bold;
            color: #666;
          }
          .value {
            color: #333;
          }
          .timestamp {
            text-align: center;
            color: #999;
            font-size: 12px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
          }
          .emoji {
            font-size: 24px;
            margin-right: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🍽️ Neue Reservierungsanfrage</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Restaurant Portocervo</p>
        </div>
        
        <div class="content">
          <div class="section">
            <h2>👤 Kontaktdaten</h2>
            <div class="info-row">
              <span class="label">Name:</span>
              <span class="value">${name}</span>
            </div>
            <div class="info-row">
              <span class="label">E-Mail:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="info-row">
              <span class="label">Telefon:</span>
              <span class="value"><a href="tel:${phone.replace(/\s/g, '')}">${phone}</a></span>
            </div>
          </div>

          <div class="section">
            <h2>📅 Reservierungsdetails</h2>
            <div class="info-row">
              <span class="label">Datum:</span>
              <span class="value"><strong>${date}</strong></span>
            </div>
            <div class="info-row">
              <span class="label">Uhrzeit:</span>
              <span class="value"><strong>${time} Uhr</strong></span>
            </div>
            <div class="info-row">
              <span class="label">Anzahl Personen:</span>
              <span class="value"><strong>${guests} ${parseInt(guests) === 1 ? 'Person' : 'Personen'}</strong></span>
            </div>
          </div>

          ${message ? `
          <div class="section">
            <h2>💬 Nachricht</h2>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div class="timestamp">
            📧 Anfrage eingegangen am: ${timestamp}
          </div>
        </div>
      </body>
      </html>
    `;

    // Schritt 5: E-Mail-Inhalt formatieren (Text-Version als Fallback)
    const emailText = `
🍽️ NEUE RESERVIERUNGSANFRAGE - Restaurant Portocervo
${'='.repeat(60)}

👤 KONTAKTDATEN:
----------------
Name:     ${name}
E-Mail:   ${email}
Telefon:  ${phone}

📅 RESERVIERUNGSDETAILS:
------------------------
Datum:           ${date}
Uhrzeit:         ${time} Uhr
Anzahl Personen: ${guests}

${message ? `💬 NACHRICHT:\n${'-'.repeat(60)}\n${message}\n` : ''}

${'='.repeat(60)}
📧 Anfrage eingegangen am: ${timestamp}
    `.trim();

    // Schritt 6: Nodemailer Transporter erstellen (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Schritt 7: E-Mail versenden
    const recipientEmail = process.env.MAIL_TO || process.env.SMTP_USER; // Falls MAIL_TO nicht gesetzt, an dich selbst
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipientEmail, // An Restaurant (oder temporär an dich)
      replyTo: email, // Antwort geht an den Gast
      subject: `🍽️ NEUE RESERVIERUNG - ${date} um ${time} Uhr - ${name}`,
      html: emailHtml,
      text: emailText,
    });

    console.log('✅ Reservierung erfolgreich versendet an:', recipientEmail);
    console.log(`📋 Details: ${name} | ${date} ${time} | ${guests} Personen`);

    // Schritt 8: Erfolg zurückmelden
    return NextResponse.json({
      success: true,
      message: 'Reservierungsanfrage erfolgreich gesendet',
    });

  } catch (error) {
    console.error('❌ Fehler beim Versenden der Reservierung:', error);
    
    // Prüfen ob SMTP konfiguriert ist
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('⚠️  SMTP nicht konfiguriert! Bitte .env.local erstellen mit:');
      console.error('   SMTP_USER=deine-gmail@gmail.com');
      console.error('   SMTP_PASSWORD=dein-app-passwort');
    }

    return NextResponse.json(
      {
        error: 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut oder rufen Sie uns an: 06831 2747',
      },
      { status: 500 }
    );
  }
}

// ============================================
// ANLEITUNG: Gmail App-Passwort erstellen
// ============================================

/*
So erstellst du ein Gmail App-Passwort:

1. Gehe zu: https://myaccount.google.com/
2. Klicke auf "Sicherheit"
3. Aktiviere "2-Faktor-Authentifizierung" (falls noch nicht aktiv)
4. Scrolle zu "App-Passwörter"
5. Wähle: Mail + Anderes Gerät (z.B. "Portocervo Website")
6. Google generiert ein 16-stelliges Passwort: abcd efgh ijkl mnop
7. Kopiere dieses Passwort in die .env.local Datei

Beispiel .env.local:
SMTP_USER=restaurant@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop

Wichtig: 
- NICHT dein normales Gmail-Passwort verwenden!
- Nur das App-Passwort funktioniert
- Die .env.local ist bereits im .gitignore
*/
