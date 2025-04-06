'use client' // Can be a Client Component for animations

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

/**
 * Renders a user-friendly 404 Not Found page.
 * Includes a link back to the homepage.
 *
 * @returns {React.ReactElement} The rendered Not Found component.
 */
export default function NotFound(): React.ReactElement {
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-200px)] w-full">
            <div className="">
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Optional: Placeholder for a 404 image */}
                    <Image
                        src="/assets/404.png"
                        alt="Not Found yellowdog illustration"
                        className="shadow-secondary/20 mx-auto mb-8 w-full max-w-md rounded-lg shadow-lg"
                        width={256}
                        height={256}
                    />
                    <h1 className="text-primary mb-5 text-5xl font-bold">
                        404 - Page Not Found
                    </h1>
                    <p className="mb-5">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <Link
                        href="/"
                        className="btn btn-primary shadow-secondary/20 hover:shadow-secondary/40 shadow-lg transition-all duration-300 ease-in-out"
                    >
                        Go Home <FaArrowRight className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
