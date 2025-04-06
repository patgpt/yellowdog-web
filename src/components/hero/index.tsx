'use client'

import { ComponentHero } from '@/graphql/__generated__/sdk'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection({ hero }: { hero: ComponentHero }) {
    return (
        <section className="from-primary to-secondary relative overflow-hidden bg-gradient-to-br">
            <div className="container mx-auto flex max-w-screen-lg flex-col items-center justify-between px-4 py-24 text-center lg:flex-row lg:py-32 lg:text-left">
                <div className="mb-12 lg:mb-0 lg:max-w-lg">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-4 text-4xl font-bold text-gray-900 md:text-6xl"
                    >
                        {hero.heading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mb-8 max-w-3xl text-lg text-gray-800 md:text-2xl"
                    >
                        {hero.subHeading}
                    </motion.p>
                    <motion.a
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        href={hero.ctaFieldsCollection?.items[0]?.ctaLink ?? ''}
                        className="inline-block rounded-full bg-gray-900 px-8 py-3 text-base font-medium text-white shadow-xl transition-all hover:bg-gray-800 md:text-lg"
                    >
                        {hero.ctaFieldsCollection?.items[0]?.ctaText}
                    </motion.a>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="relative h-60 w-60"
                >
                    <Image
                        src={hero.heroImage?.url ?? ''}
                        alt="Yellowdog Mascot"
                        width={256}
                        height={256}
                    />
                    {/* Decorative background circles */}
                    <div className="bg-primary shadow-primary/20 absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-30 shadow-lg"></div>
                    <div className="bg-secondary shadow-secondary/20 absolute -bottom-16 -left-16 h-96 w-96 rounded-full opacity-30 shadow-lg"></div>
                </motion.div>
            </div>
        </section>
    )
}
