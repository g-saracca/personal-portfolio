'use client'

// components
import { useEffect, useState } from 'react'
import { motion, useScroll } from 'motion/react'
import ColorSelector from '../ColorSelector'
import LanguageSelector from '../LanguageSelector'

const Header = () => {
    const { scrollYProgress } = useScroll()
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setProgressBarWidth(latest * 100)
        })
        return unsubscribe
    }, [scrollYProgress])

    return (
        <header className="flex flex-col w-full fixed top-0 z-10 backdrop-blur  text-gray-800 dark:text-gray-200 bg-sky-400 bg-opacity-10">
            <motion.div
                className="progress-bar h-[3px] bg-sky-400 self-center"
                style={{
                    width: `${progressBarWidth}%`,
                }}
            ></motion.div>
            <ul
                className={`flex items-center gap-4 p-4 transition-all duration-300 ${
                    progressBarWidth >= 20 ? 'py-1' : 'py-4'
                }`}
            >
                <li>
                    <ColorSelector />
                </li>
                <li>
                    <LanguageSelector />
                </li>
            </ul>
        </header>
    )
}

export default Header
