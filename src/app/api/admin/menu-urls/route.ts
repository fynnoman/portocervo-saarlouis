import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

const FILE_NAMES = ['Mittagstisch.pdf', 'Speisekarte.pdf', 'Empfehlungskarte.pdf'];

const KEY_MAP: Record<string, string> = {
  'Mittagstisch.pdf': 'mittagstisch',
  'Speisekarte.pdf': 'speisekarte',
  'Empfehlungskarte.pdf': 'empfehlungskarte',
};

// Fallback URLs (die ursprünglichen /public Dateien)
const FALLBACK_URLS: Record<string, string> = {
  mittagstisch: '/Mittagstisch.pdf',
  speisekarte: '/SPEISEKARTE KOMPLETT dezember2 2025 Kopie.pdf',
  empfehlungskarte: '/empfehlungskarte.pdf',
};

export async function GET() {
  try {
    // Wenn kein Token vorhanden, sofort Fallback zurückgeben
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(FALLBACK_URLS);
    }

    const { blobs } = await list();
    const files = { ...FALLBACK_URLS };

    for (const blob of blobs) {
      const name = blob.pathname.split('/').pop() || blob.pathname;
      if (FILE_NAMES.includes(name)) {
        files[KEY_MAP[name]] = blob.url;
      }
    }

    return NextResponse.json(files, {
      headers: { 'Cache-Control': 'public, max-age=60, stale-while-revalidate=300' },
    });
  } catch {
    return NextResponse.json(FALLBACK_URLS);
  }
}
