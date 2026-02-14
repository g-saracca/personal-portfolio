import { motion } from 'motion/react'

interface Props {
    word: string
}

const SectionTitle = ({ word }: Props) => {
    const wordsArray = word.split('')

    const list = {
        visible: {
            transition: {
                when: 'afterChildren',
                delayChildren: 0.3,
                staggerChildren: 0.1,
            },
        },
    }

    const variant1 = {
        hidden: { opacity: 0, x: -200, y: -100 },
        visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 1.5 } },
    }
    const variant2 = {
        hidden: { opacity: 0, x: 10, y: 200 },
        visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 1.5 } },
    }
    const variant3 = {
        hidden: { opacity: 0, x: 250, y: -250 },
        visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 1.5 } },
    }
    const variant4 = {
        hidden: { opacity: 0, x: 100, y: 200 },
        visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 1.5 } },
    }

    const variants = [variant1, variant2, variant3, variant4]

    const animationsArray: any[] = []

    for (let i = 0; i < wordsArray.length; i++) {
        if (animationsArray.length === wordsArray.length) {
            break
        }
        variants.forEach((v) => animationsArray.push(v))
    }

    const wordsWithAnimation = wordsArray.map((w, i) => ({
        letter: w,
        animation: animationsArray[i],
    }))

    return (
        <motion.div
            className="flex items-center pl-4 pt-1 lg:pt-0 w-fit relative"
            initial="hidden"
            whileInView="visible"
            variants={list}
            viewport={{ once: true, amount: 'all' }}
            key={word}
            aria-label={word}
        >
            {wordsWithAnimation &&
                wordsWithAnimation.length &&
                wordsWithAnimation.map(({ letter, animation }, i) => {
                    const isLastLetter = i + 1 === word.length

                    return (
                        <motion.span
                            variants={animation}
                            className={`text-5xl lg:text-7xl 2xl:text-8xl font-semibold uppercase mr-2 ${
                                isLastLetter && 'mr-0'
                            }`}
                            key={i}
                        >
                            {letter}
                        </motion.span>
                    )
                })}
            {/* Lines */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { when: 'afterChildren' } } }}
                viewport={{ once: true, amount: 'all' }}
            >
                <motion.div
                    variants={{
                        visible: { width: '100%', transition: { duration: 0.75, delay: 1 } },
                    }}
                    className="h-[2px] lg:h-1 bg-sky-500 dark:bg-sky-400 absolute top-0 left-0"
                ></motion.div>
                <motion.div
                    variants={{
                        visible: { height: '100%', transition: { duration: 0.75 } },
                    }}
                    className="w-[2px] lg:w-1 bg-sky-500  dark:bg-sky-400 absolute bottom-0 left-0"
                ></motion.div>
            </motion.div>
        </motion.div>
    )
}
export default SectionTitle
