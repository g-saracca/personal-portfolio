'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import NextIcon from '../../../public/images/nextjs-icon.svg'
import TsIcon from '../../../public/images/typescript-icon-round.svg'
import FramerIcon from '../../../public/images/framer.svg'
import TailwindIcon from '../../../public/images/tailwindcss-icon.svg'
import ContentfulIcon from '../../../public/images/contentful.svg'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations()

    const listVariants = {
        visible: {
            transition: {
                when: 'afterChildren',
                delayChildren: 0.25,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.4, duration: 1 } },
        hidden: { opacity: 0, y: -100 },
    }

    return (
        <footer className="bg-sky-500 dark:bg-sky-400 px-4 py-8 sm:p-12 sm:pb-16 border-t-2 border-gray-800 dark:border-gray-200 overflow-hidden">
            <section>
                <h3 className="mb-4 sm:mb-8 pl-2 font-semibold text-lg 2xl:text-xl text-gray-800 uppercase">
                    {t('footer.made_with')} 👇
                </h3>
                <motion.ul
                    className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-10 gap-3 text-gray-100"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.li className="flex items-center gap-2" variants={itemVariants}>
                        <div className="grid content-center bg-white rounded-full p-1">
                            <Image src={NextIcon} width={30} height={30} alt="Next JS" />
                        </div>
                        <p className="font-semibold text-lg">Next JS</p>
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={itemVariants}>
                        <div className="grid content-center bg-white rounded-full p-1">
                            <Image src={TsIcon} width={30} height={30} alt="Next JS" />
                        </div>
                        <p className="font-semibold text-lg">Typescript</p>
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={itemVariants}>
                        <div className="grid content-center bg-white rounded-full p-1">
                            <Image src={FramerIcon} width={30} height={30} alt="Next JS" />
                        </div>
                        <p className="font-semibold text-lg">Framer Motion</p>
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={itemVariants}>
                        <div className="grid content-center bg-white rounded-full p-1">
                            <Image src={TailwindIcon} width={30} height={30} alt="Next JS" />
                        </div>
                        <p className="font-semibold text-lg">Tailwind CSS</p>
                    </motion.li>
                    <motion.li className="flex items-center gap-2" variants={itemVariants}>
                        <div className="grid content-center bg-white rounded-full p-1">
                            <Image src={ContentfulIcon} width={30} height={30} alt="Next JS" />
                        </div>
                        <p className="font-semibold text-lg">Contentful CMS</p>
                    </motion.li>
                </motion.ul>
            </section>
        </footer>
    )
}
export default Footer
