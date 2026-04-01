import { NextRequest, NextResponse } from 'next/server';
import { saveContent, SiteContent } from '@/lib/content';
import { revalidatePath } from 'next/cache';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portocervo2024';

export async function POST(request: NextRequest) {
  try {
    const { password, content } = await request.json();

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Falsches Passwort.' }, { status: 401 });
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ error: 'BLOB_READ_WRITE_TOKEN nicht konfiguriert.' }, { status: 503 });
    }

    await saveContent(content as SiteContent);

    // Cache der Hauptseite invalidieren
    try { revalidatePath('/'); } catch { /* ignore */ }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Save error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unbekannter Fehler beim Speichern.' },
      { status: 500 }
    );
  }
}
