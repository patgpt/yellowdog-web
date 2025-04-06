'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoData {
    src: string
    alt: string
    width?: number
    height?: number
}

interface LogoClusterProps {
    logos: LogoData[]
    centralLogo: LogoData
    radius?: number // Radius of the circle for orbiting logos
    orbitingLogoSize?: number // Uniform size for orbiting logos
}

export default function LogoCluster({
    logos,
    centralLogo,
    radius = 150, // Default radius
    orbitingLogoSize = 60, // Default orbiting size
}: LogoClusterProps) {
    const numLogos = logos.length
    const angleStep = (2 * Math.PI) / numLogos

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger animation of each logo
                delayChildren: 0.3, // Small delay before starting stagger
            },
        },
    }

    const itemInitial = (i: number) => {
        const angle = i * angleStep
        const initialRadius = radius * 1.5 // Start further out
        return {
            x: initialRadius * Math.cos(angle),
            y: initialRadius * Math.sin(angle),
            scale: 0,
            opacity: 0,
        }
    }

    const itemAnimate = (i: number) => {
        const orbitAngle = i * angleStep
        const orbitX = radius * Math.cos(orbitAngle)
        const orbitY = radius * Math.sin(orbitAngle)

        const angle90 = orbitAngle + Math.PI / 2
        const angle180 = orbitAngle + Math.PI
        const angle270 = orbitAngle + Math.PI * 1.5

        const rotateX90 = radius * Math.cos(angle90)
        const rotateY90 = radius * Math.sin(angle90)
        const rotateX180 = radius * Math.cos(angle180)
        const rotateY180 = radius * Math.sin(angle180)
        const rotateX270 = radius * Math.cos(angle270)
        const rotateY270 = radius * Math.sin(angle270)

        return {
            x: [
                orbitX,
                orbitX,
                orbitX,
                orbitX,
                rotateX90,
                rotateX180,
                rotateX270,
                orbitX,
            ],
            y: [
                orbitY,
                orbitY,
                orbitY,
                orbitY,
                rotateY90,
                rotateY180,
                rotateY270,
                orbitY,
            ],
            scale: [1, 1.15, 1, 1, 1, 1, 1, 1],
            opacity: 1,
        }
    }

    const itemTransition = {
        duration: 8,
        repeat: Infinity,
        repeatDelay: 2,
        ease: 'linear',
        times: [0, 0.06, 0.12, 0.5, 0.65, 0.8, 0.9, 1],
    }

    const centerLogoVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: 0.1, duration: 0.4 },
        },
    }

    return (
        <motion.div
            className="relative flex items-center justify-center"
            style={{
                width: radius * 2 + orbitingLogoSize,
                height: radius * 2 + orbitingLogoSize,
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Central Logo */}
            <motion.div
                key={centralLogo.src}
                variants={centerLogoVariants}
                className="z-10" // Ensure central logo is above orbiting ones if needed
            >
                <Image
                    src={centralLogo.src}
                    alt={centralLogo.alt}
                    width={centralLogo.width ?? 200} // Central logo size
                    height={centralLogo.height ?? 200}
                    priority
                />
            </motion.div>

            {/* Orbiting Logos */}
            {logos.map((logo, index) => (
                <motion.div
                    key={logo.src}
                    className="absolute flex items-center justify-center"
                    style={{
                        top: '50%',
                        left: '50%',
                        marginTop: -orbitingLogoSize / 2,
                        marginLeft: -orbitingLogoSize / 2,
                    }}
                    custom={index}
                    initial={itemInitial(index)}
                    animate={itemAnimate(index)}
                    transition={itemTransition}
                >
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={orbitingLogoSize}
                        height={orbitingLogoSize}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}
