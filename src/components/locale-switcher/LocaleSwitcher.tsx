import { useLocale } from 'next-intl'
import LocaleSwitcherButton from './LocaleSwitcherButton'
import { SupportedLocale } from '../../i18n/constants'

export default function LocaleSwitcher() {
    const locale = useLocale() as SupportedLocale

    return <LocaleSwitcherButton currentLocale={locale} />
}
