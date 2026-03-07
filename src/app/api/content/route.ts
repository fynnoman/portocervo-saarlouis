import { NextResponse } from 'next/server';
import { getContent } from '@/lib/content';

export const revalidate = 60;

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content, {
    headers: { 'Cache-Control': 'public, max-age=60, stale-while-revalidate=300' },
  });
}
