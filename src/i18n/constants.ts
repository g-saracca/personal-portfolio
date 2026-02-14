export const LANG_LOCALE_COOKIE_NAME = 'locale_lang'
export const SUPPORTED_LOCALES = ['en', 'es'] as const
export const DEFAULT_LOCALE = 'en'

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]
