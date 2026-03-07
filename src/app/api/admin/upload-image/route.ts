import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'portocervo2024';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get('password') as string;
  const file = formData.get('file') as File;

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Falsches Passwort.' }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'Blob nicht konfiguriert.' }, { status: 503 });
  }

  if (!file || !file.type.startsWith('image/')) {
    return NextResponse.json({ error: 'Nur Bilder erlaubt.' }, { status: 400 });
  }

  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: 'Datei zu groß (max. 10 MB).' }, { status: 400 });
  }

  const ext = file.name.split('.').pop() || 'jpg';
  const filename = `image-${Date.now()}.${ext}`;

  const blob = await put(filename, file, {
    access: 'public',
    allowOverwrite: true,
  });

  return NextResponse.json({ url: blob.url });
}
