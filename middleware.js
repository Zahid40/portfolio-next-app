import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = { matcher: '/api/database/welcome' };
 
export async function middleware() {
  const projects = await get('projects');
  return NextResponse.json(projects);
}