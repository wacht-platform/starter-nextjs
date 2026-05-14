import { NextResponse } from 'next/server';
import { createRouteMatcher, wachtMiddleware } from '@wacht/nextjs/server';

const isProtected = createRouteMatcher(['/account(.*)']);

export default wachtMiddleware(
  async (auth, req) => {
    if (!isProtected(req)) return NextResponse.next();
    await auth.protect();
    return NextResponse.next();
  },
  {
    apiRoutePrefixes: ['/api', '/trpc'],
  },
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
