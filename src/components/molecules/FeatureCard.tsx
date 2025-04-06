'use client'

import { ComponentFeature } from '@/graphql/__generated__/sdk'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const FeatureCard: React.FC<ComponentFeature> = ({
    link,
    heading,
    description,
    image,
}) => {
    console.log(image)
    return (
        <Link href={link?.href || ''}>
            <motion.div
                className="card bg-base-200/75 shadow-secondary/20 hover:shadow-secondary/40 my16 mx-auto w-[300px] text-center shadow-xl backdrop-blur-sm transition-all ease-in-out hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <div className="card-body mx-auto">
                    {image?.url && (
                        <Image
                            src={image?.url || ''}
                            alt={image?.title || 'decorative image'}
                            width={150}
                            height={150}
                        />
                    )}

                    <h2 className="card-title">{heading}</h2>
                    <p>{description}</p>
                </div>
            </motion.div>
        </Link>
    )
}

export default FeatureCard
