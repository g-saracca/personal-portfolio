import { motion } from 'motion/react'

const AnimatedShape = () => {
    return (
        <motion.div
            className="w-24 h-24 bg-sky-400"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
                duration: 4,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
        />
    )
}
export default AnimatedShape
