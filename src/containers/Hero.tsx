'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { CgMouse } from 'react-icons/cg'
import { HiChevronDown } from 'react-icons/hi'
import AnimatedShape from '../components/AnimatedShape'
import { HeroFields } from '../types'

const list = {
    visible: {
        transition: {
            when: 'afterChildren',
            delayChildren: 0.5,
            staggerChildren: 0.4,
        },
    },
}

const fromLeft = {
    visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, bounce: 0.5, duration: 2 } },
    hidden: { opacity: 0, x: -100 },
}
const fromBottom = {
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.5, duration: 2 } },
    hidden: { opacity: 0, y: 50 },
}

interface Props {
    heroFields: HeroFields
}

const Hero = ({ heroFields }: Props) => {
    const t = useTranslations()

    return (
        <section className="min-h-screen flex flex-col justify-center section-padding" id="hero-intro">
            <motion.div initial="hidden" whileInView="visible" variants={list} viewport={{ once: true }}>
                {/* Title */}
                <motion.h1 variants={fromLeft} className="mb-6 text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                    {t('hero.greeting_prepend')} {heroFields.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    variants={fromBottom}
                    className="mb-8 text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-sky-500 dark:text-sky-400"
                >
                    {heroFields.subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p variants={fromBottom} className="mb-8 lg:max-w-3xl 2xl:max-w-4xl">
                    {heroFields.description}
                </motion.p>

                {/* PDF */}
                <motion.div variants={fromBottom} className="btn-wrapper">
                    <a className="btn" href={heroFields.pdf} target="_blank" rel="noreferrer">
                        {t('hero.download_pdf')}
                    </a>
                </motion.div>
                {/* Scroll Down animation */}
                <motion.div
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                    className="absolute bottom-12 left-[50%] translate-x-[-50%]"
                >
                    <motion.div
                        animate={{
                            y: [0, 25, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                        initial="false"
                        className="hidden lg:flex flex-col items-center text-gray-800 dark:text-sky-400"
                    >
                        <CgMouse size={40} />
                        <HiChevronDown size={30} />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="hidden sm:block absolute bottom-[10%] right-[10%]">
                <AnimatedShape />
            </div>
        </section>
    )
}
export default Hero
