import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const res = await fetch('API LINK');
  const posts = await res.json();

  return NextResponse.json(posts);
}