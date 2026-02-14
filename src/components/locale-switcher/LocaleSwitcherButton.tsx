'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { MdLanguage } from 'react-icons/md'
import { LANG_LOCALE_COOKIE_NAME } from '../../i18n/constants'
import type { SupportedLocale } from '../../i18n/constants'
import { cn } from '../../utils/cn'

type Props = {
    currentLocale: SupportedLocale
}

export default function LocaleSwitcherSelect({ currentLocale }: Props) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const t = useTranslations()

    function handleChangeLocale() {
        const newLocale: SupportedLocale = currentLocale === 'en' ? 'es' : 'en'

        document.cookie = `${LANG_LOCALE_COOKIE_NAME}=${newLocale};path=/;max-age=31536000`

        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <button
            className={cn(
                'flex items-center gap-1 text-2xl transition duration-200 ease-in-out dark:hover:text-sky-400 hover:text-sky-600 xl:text-3xl',
                isPending && 'opacity-50'
            )}
            onClick={handleChangeLocale}
            disabled={isPending}
        >
            <MdLanguage size="1em" />
            <span className="text-sm sm:text-base xl:text-lg" aria-hidden="true">
                {currentLocale === 'en' ? 'EN' : 'ES'}
            </span>
            <span className="sr-only">
                {currentLocale === 'en' ? t('global.change_to_spanish') : t('global.change_to_english')}
            </span>
        </button>
    )
}
