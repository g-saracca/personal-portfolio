'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '../i18n/navigation'
import { MdLanguage } from 'react-icons/md'

export default function LanguageSelector() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const t = useTranslations()

    const changeLocale = () => {
        const newLocale = locale === 'en' ? 'es' : 'en'
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <button
            className="flex items-center gap-1 text-2xl transition duration-200 ease-in-out dark:hover:text-sky-400 hover:text-sky-600 xl:text-3xl"
            onClick={changeLocale}
            aria-label={locale === 'en' ? t('global.change_to_spanish') : t('global.change_to_english')}
        >
            {/* <MdLanguage size="1em" /> */}
            <span className="text-sm sm:text-base xl:text-lg">{locale === 'en' ? 'EN' : 'ES'}</span>
            <span className="sr-only">
                {locale === 'en' ? t('global.change_to_spanish') : t('global.change_to_english')}
            </span>
        </button>
    )
}
