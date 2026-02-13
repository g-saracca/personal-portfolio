import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'next-i18next'
import { MdOutlineContentCopy } from 'react-icons/md'

interface Props {
    text: string
}

const CopyToClipboard = ({ text }: Props) => {
    const [showTextCopied, setShowTextCopied] = useState(false)
    const { t } = useTranslation('common')

    const handleCopy = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => setShowTextCopied(true))
            .catch((e) => console.error(e))
    }

    useEffect(() => {
        if (showTextCopied) {
            setTimeout(() => {
                setShowTextCopied((c) => !c)
            }, 2500)
        }
    }, [showTextCopied])

    return (
        <div className="relative">
            <button
                className="grid place-items-center mr-3 text-gray-800 dark:text-gray-200 hover:text-sky-400 dark:hover:text-sky-400"
                onClick={handleCopy}
                aria-label={t('global.copy_content')}
            >
                <MdOutlineContentCopy />
            </button>
            <AnimatePresence>
                {showTextCopied && (
                    <motion.span
                        className="w-max py-[1px] px-2 rounded-md bg-gray-500 text-gray-200 text-sm opacity-0 absolute left-full top-1/2 -translate-y-1/2 not-italic"
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {t('global.copied')}👌
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CopyToClipboard
