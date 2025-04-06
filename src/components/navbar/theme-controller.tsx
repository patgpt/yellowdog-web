'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ThemeController() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    // Wait for mount to prevent hydration mismatch
    useEffect(() => setMounted(true), [])

    // Determine theme state after mount
    const isDark = mounted && resolvedTheme === 'cdark'

    const toggleTheme = () => {
        setTheme(isDark ? 'clight' : 'cdark')
    }

    const iconVariants = {
        initial: { scale: 0.6, rotate: 90, opacity: 0 },
        animate: { scale: 1, rotate: 0, opacity: 1 },
        exit: { scale: 0.6, rotate: -90, opacity: 0 },
    }

    const transition = { duration: 0.25, ease: 'easeInOut' }

    // Render placeholder until mounted
    if (!mounted) {
        return <div className="h-10 w-10 rounded-full md:h-12 md:w-12"></div>
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="hover:bg-base-200 focus:ring-secondary focus:ring-offset-base-100 relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none md:h-12 md:w-12"
            aria-label={
                isDark ? 'Switch to clight theme' : 'Switch to cdark theme'
            }
        >
            <AnimatePresence initial={false} mode="wait">
                {isDark ? (
                    <motion.div
                        key="moon" // Unique key for AnimatePresence
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
                        className="absolute flex items-center justify-center"
                    >
                        <Image
                            src="/assets/moon.png"
                            alt="Moon icon - Dark mode"
                            width={32}
                            height={32}
                            priority
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun" // Unique key for AnimatePresence
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transition}
                        className="absolute flex items-center justify-center"
                    >
                        <Image
                            src="/assets/sun.png"
                            alt="Sun icon - Light mode"
                            width={32}
                            height={32}
                            priority
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}
