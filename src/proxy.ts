import { NextRequest, NextResponse } from 'next/server'

export function proxy(_request: NextRequest) {
    return NextResponse.next()
}

export const config = {
    // Match all pathnames except for
    // - /api routes
    // - /_next (Next.js internals)
    // - /images (public images)
    // - all files in /public with extensions
    matcher: ['/((?!api|_next|images|.*\\..*).*)'],
}
