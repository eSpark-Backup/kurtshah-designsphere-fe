import { NextResponse } from 'next/server'
 
export const config = {
    matcher: ['/'],
  };
  
  export async function middleware(request) {
    const url = request.nextUrl;
  
    if (url.pathname === '/') {
      return NextResponse.redirect(new URL('/projects', request.url));
    }
  
    return NextResponse.next();
  }