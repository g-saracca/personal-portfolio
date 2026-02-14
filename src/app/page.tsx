import client from '../../configs/contentfulClient'
import { setRequestLocale } from 'next-intl/server'
import Hero from '../containers/Hero'
import Work from '../containers/Work'
import Contact from '../containers/Contact'
import LoadingPage from '../components/LoadingPage'
import { IHero, IWorks, WorkFields } from '../types'

export const revalidate = 10

interface Props {
    params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params
    setRequestLocale(locale)

    const contentLocale = locale === 'es' ? 'es-AR' : 'en-US'

    const hero = await client.getEntries({
        content_type: 'portfolioHero',
        locale: contentLocale,
    })
    const projects = await client.getEntries({
        content_type: 'portfolioProject',
        locale: contentLocale,
    })

    const heroItems = hero.items as IHero[]
    const workItems = projects.items as IWorks[]

    if (!heroItems.length) {
        return <LoadingPage />
    }

    const { fields: heroFields } = heroItems[0]

    const worksFormatted: WorkFields[] = workItems.length
        ? workItems.map((p) => p.fields).sort((a, b) => a.order - b.order)
        : []

    return (
        <>
            <Hero heroFields={heroFields} />

            {worksFormatted.length > 0 && <Work work={worksFormatted} />}

            <Contact />
        </>
    )
}
