import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export const proxy = createMiddleware(routing)

export const config = {
    // Match all pathnames except for
    // - /api routes
    // - /_next (Next.js internals)
    // - /images (public images)
    // - all files in /public with extensions
    matcher: ['/((?!api|_next|images|.*\\..*).*)'],
}
