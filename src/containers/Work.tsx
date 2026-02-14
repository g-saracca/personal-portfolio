'use client'

import { useTranslations } from 'next-intl'
import SectionTitle from '../components/SectionTitle'
import WorkCard from '../components/WorkCard'
import { motion } from 'motion/react'
import { WorkFields } from '../types'

interface Props {
    work: WorkFields[]
}

const Work = ({ work }: Props) => {
    const t = useTranslations()

    const listVariants = {
        visible: {
            transition: {
                when: 'afterChildren',
                delayChildren: 0.5,
                staggerChildren: 0.6,
            },
        },
    }

    const listCardVariants = {
        visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' as const, bounce: 0.5, duration: 2 } },
        hidden: { opacity: 0, x: 70, y: 100 },
    }

    return (
        <section className="min-h-screen section-padding py-28" id="work">
            {/* Title */}
            <div className="mb-24">
                <SectionTitle word={t('work.title')} />
            </div>

            {/* Content */}
            <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3 xl:gap-10"
            >
                {work.map((w) => (
                    <motion.div variants={listCardVariants} className="h-full" key={w.slug}>
                        <WorkCard work={w} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
export default Work
