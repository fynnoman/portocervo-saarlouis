import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portocervo2024';

const ALLOWED_KEYS = ['mittagstisch', 'speisekarte', 'empfehlungskarte'];
const FILE_NAMES: Record<string, string> = {
  mittagstisch: 'Mittagstisch.pdf',
  speisekarte: 'Speisekarte.pdf',
  empfehlungskarte: 'Empfehlungskarte.pdf',
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get('password') as string;
  const key = formData.get('key') as string;
  const file = formData.get('file') as File;

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Falsches Passwort.' }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'Blob-Speicher nicht konfiguriert. Bitte BLOB_READ_WRITE_TOKEN in Vercel setzen.' }, { status: 503 });
  }

  if (!ALLOWED_KEYS.includes(key)) {
    return NextResponse.json({ error: 'Ungültige Karte.' }, { status: 400 });
  }

  if (!file || file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'Nur PDF-Dateien erlaubt.' }, { status: 400 });
  }

  if (file.size > 20 * 1024 * 1024) {
    return NextResponse.json({ error: 'Datei zu groß (max. 20 MB).' }, { status: 400 });
  }

  const blob = await put(FILE_NAMES[key], file, {
    access: 'public',
    allowOverwrite: true,
  });

  return NextResponse.json({ url: blob.url });
}
