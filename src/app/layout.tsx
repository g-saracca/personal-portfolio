import type { Metadata } from 'next'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { ColorThemeProvider } from '../context/ThemeProvider'
import Layout from '../components/layout'
import Script from 'next/script'

import '../styles/globals.css'

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
    params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
    // const { locale } = await params

    // setRequestLocale(locale)

    const messages = await getMessages()

    return (
        <html
            // lang={locale}
            suppressHydrationWarning
        >
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
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
                <NextIntlClientProvider messages={messages}>
                    <ColorThemeProvider>
                        <Layout>{children}</Layout>
                    </ColorThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
