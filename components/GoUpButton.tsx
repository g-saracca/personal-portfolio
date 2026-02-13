'use client'

import { useScroll } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'

const GoUpButton = () => {
    const { scrollYProgress } = useScroll()
    const [showButton, setShowButton] = useState(false)
    const t = useTranslations()

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            if (latest * 100 > 70) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
        return unsubscribe
    }, [scrollYProgress])

    const goUp = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 })
    }

    return (
        <button
            className="fixed bottom-4 right-4  sm:bottom-12 sm:right-12 z-50 text-white bg-sky-400 rounded-full p-3 
            hover:bg-sky-500 hover:scale-105 drop-shadow-lg border-[1px] border-gray-800 dark:border-white 
            active:scale-95
            transition ease-in-out"
            style={{ opacity: showButton ? 1 : 0 }}
            onClick={goUp}
            aria-label={t('global.scroll_up')}
        >
            <BsArrowUp size={30} />
        </button>
    )
}
export default GoUpButton
