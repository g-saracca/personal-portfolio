import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <meta name="author" content="Germán Saracca" />
                <meta name="description" content="Germán Saracca portfolio" />
                <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION_ID} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
