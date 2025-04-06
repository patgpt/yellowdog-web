'use client' // Error components must be Client Components

import { motion } from 'framer-motion' // Import motion
import Image from 'next/image'
import React, { useEffect } from 'react'

/**
 * Renders a user-friendly error boundary fallback UI for a specific route segment.
 * Includes a button to attempt recovery by re-rendering the segment.
 *
 * @param {object} props - Component props.
 * @param {Error & { digest?: string }} props.error - The error object.
 * @param {() => void} props.reset - Function to attempt recovery.
 * @returns {React.ReactElement} The rendered error component.
 */
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}): React.ReactElement {
    useEffect(() => {
        // Log the error to an error reporting service
        // In production, error.message is generic, use error.digest for server logs
        console.error('Segment Error:', error.message, 'Digest:', error.digest)
    }, [error])

    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-200px)]">
            <div className="hero-content text-center">
                {/* Wrap content with motion.div for animation */}
                <motion.div
                    className="max-w-md"
                    initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
                    animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                    transition={{ duration: 0.5 }} // Animation duration
                >
                    <Image
                        src="/assets/error.png"
                        alt="Error yellowdog illustration"
                        className="mx-auto mb-8 w-64"
                        width={256}
                        height={256}
                    />
                    <h1 className="text-error mb-5 text-5xl font-bold">
                        Oops!
                    </h1>
                    <p className="mb-5">
                        Something went wrong while loading this part of the
                        page.
                    </p>
                    <p className="text-base-content/50 mb-5 text-xs">
                        Error Digest: {error.digest || 'N/A'}
                    </p>
                    <button className="btn btn-primary" onClick={() => reset()}>
                        Try again
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
