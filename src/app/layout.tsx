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

const siteUrl = 'https://personal-portfolio-germansaracca.vercel.app'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: 'Germán Saracca | Frontend Developer Portfolio',
    description:
        'Frontend developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and experience building modern web applications.',
    authors: [{ name: 'Germán Saracca' }],
    keywords: ['frontend developer', 'React', 'Next.js', 'TypeScript', 'portfolio', 'web developer'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Germán Saracca Portfolio',
        title: 'Germán Saracca | Frontend Developer Portfolio',
        description:
            'Frontend developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and experience building modern web applications.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Germán Saracca | Frontend Developer Portfolio',
        description:
            'Frontend developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and experience.',
    },
    alternates: {
        canonical: siteUrl,
    },
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Germán Saracca',
                            url: siteUrl,
                            jobTitle: 'Frontend Developer',
                            email: 'gersaracca@gmail.com',
                            sameAs: ['https://www.linkedin.com/in/german-saracca/'],
                        }),
                    }}
                />
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
