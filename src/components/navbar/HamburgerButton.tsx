'use client' // This component needs interactivity (label triggers checkbox)

import Image from 'next/image'
import React from 'react'

/**
 * Renders the hamburger menu button to toggle the mobile navigation drawer.
 * @returns {React.ReactElement} The hamburger button component.
 */
const HamburgerButton: React.FC = (): React.ReactElement => {
    return (
        <div className="flex-none sm:hidden">
            <label
                htmlFor="my-drawer-3" // Points to the drawer checkbox in the parent Navbar
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
            >
                <Image
                    src={'/assets/hamburger.png'}
                    alt="hamburger menu"
                    width={80}
                    height={80}
                />
            </label>
        </div>
    )
}

export default HamburgerButton
