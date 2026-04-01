import { NextResponse } from 'next/server';
import { getContent } from '@/lib/content';

// Kein Caching — immer frische Daten
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
  });
}
