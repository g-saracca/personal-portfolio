import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'
import { DEFAULT_LOCALE, LANG_LOCALE_COOKIE_NAME, SUPPORTED_LOCALES } from './constants'

export { LANG_LOCALE_COOKIE_NAME }

export default getRequestConfig(async () => {
    const locale = await defineLanguage()

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
})

/**
 * Defines the initial language to be used by i18next.
 * The order of precedence is:
 * 1. Language stored in cookie (if any)
 * 2. Browser language from Accept-Language header (if supported)
 * 3. Default language from constant
 */
async function defineLanguage(): Promise<string> {
    const cookiesStore = await cookies()
    const storedLang = cookiesStore.get(LANG_LOCALE_COOKIE_NAME)?.value

    if (storedLang) return storedLang

    const supportedLocales = SUPPORTED_LOCALES.map((l) => l.toLowerCase())
    const defaultLocale = DEFAULT_LOCALE.toLowerCase()

    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language')
    const browserLang = acceptLanguage?.split(',')[0]?.trim()?.toLowerCase()

    if (browserLang && supportedLocales.includes(browserLang)) {
        return browserLang
    }

    // Check for base language (e.g., "en" from "en-US")
    const baseLang = browserLang?.split('-')[0]
    if (baseLang && supportedLocales.includes(baseLang)) {
        return baseLang
    }

    return defaultLocale
}
