import { list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portocervo2024';

const FILE_NAMES = ['Mittagstisch.pdf', 'Speisekarte.pdf', 'Empfehlungskarte.pdf'];

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Falsches Passwort.' }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ files: { mittagstisch: null, speisekarte: null, empfehlungskarte: null } });
  }

  const { blobs } = await list();

  const files: Record<string, string | null> = {
    mittagstisch: null,
    speisekarte: null,
    empfehlungskarte: null,
  };

  const keyMap: Record<string, string> = {
    'Mittagstisch.pdf': 'mittagstisch',
    'Speisekarte.pdf': 'speisekarte',
    'Empfehlungskarte.pdf': 'empfehlungskarte',
  };

  for (const blob of blobs) {
    const name = blob.pathname.split('/').pop() || blob.pathname;
    if (FILE_NAMES.includes(name)) {
      files[keyMap[name]] = blob.url;
    }
  }

  return NextResponse.json({ files });
}
