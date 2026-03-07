import { NextRequest, NextResponse } from 'next/server';
import { saveContent, SiteContent } from '@/lib/content';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portocervo2024';

export async function POST(request: NextRequest) {
  const { password, content } = await request.json();

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Falsches Passwort.' }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'Blob nicht konfiguriert.' }, { status: 503 });
  }

  await saveContent(content as SiteContent);
  return NextResponse.json({ ok: true });
}
