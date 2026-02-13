import { motion } from 'motion/react'
import AnimatedShape from './AnimatedShape'

const IntroAnimation = () => {
    return (
        <>
            <motion.div
                className="hidden sm:block fixed inset-0 z-10 bg-gray-200 dark:bg-gray-800 pointer-events-none"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            ></motion.div>
            <div className="hidden sm:block">
                <motion.div
                    className="fixed inset-0 z-20"
                    initial={{
                        display: 'grid',
                        placeItems: 'center',
                    }}
                    animate={{
                        width: 'fit-content',
                        height: 'fit-content',
                        position: 'absolute',
                        right: '6rem',
                        left: 'unset',
                        top: '75%',
                    }}
                    transition={{ duration: 3, delay: 0.5 }}
                >
                    <AnimatedShape />
                </motion.div>
            </div>
        </>
    )
}
export default IntroAnimation
