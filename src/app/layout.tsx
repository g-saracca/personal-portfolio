import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { ColorThemeProvider } from '../context/ThemeProvider'
import Layout from '../components/layout'
import Script from 'next/script'

import { getLocale } from 'next-intl/server'

import { Source_Code_Pro } from 'next/font/google'

import '../styles/globals.css'

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
    title: 'Germán Saracca Portfolio',
    description: 'Germán Saracca portfolio',
    authors: [{ name: 'Germán Saracca' }],
    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION_ID,
    },
}

interface Props {
    children: React.ReactNode
}

export default async function LocaleLayout({ children }: Props) {
    const locale = await getLocale()

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={sourceCodePro.variable}>
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `,
                    }}
                />
                <NextIntlClientProvider>
                    <ColorThemeProvider>
                        <Layout>{children}</Layout>
                    </ColorThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
