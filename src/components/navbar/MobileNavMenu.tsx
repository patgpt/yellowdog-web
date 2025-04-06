'use client' // This component needs interactivity for the drawer overlay click

import Link from 'next/link'
import React from 'react'

/**
 * Simplified type for navigation links, containing only necessary fields.
 */
interface SimpleNavLink {
    href?: string | null
    title?: string | null
}

interface MobileNavMenuProps {
    items: (SimpleNavLink | null)[] | null | undefined
}

/**
 * Renders the mobile navigation menu links within the drawer sidebar.
 * @param {MobileNavMenuProps} props - The component props.
 * @param {(SimpleNavLink | null)[] | null | undefined} props.items - The array of navigation links.
 * @returns {React.ReactElement} The mobile navigation menu component.
 */
const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
    items,
}): React.ReactElement => {
    return (
        <div className="drawer-side">
            {/* Overlay to close the drawer when clicked */}
            <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {/* Check if items exist before mapping */}
                {items?.map((link: SimpleNavLink | null, index) => (
                    <li key={link?.href || index}>
                        {' '}
                        {/* Use index as fallback key */}
                        <Link href={link?.href ?? '#'}>
                            {link?.title ?? 'Missing Title'}
                        </Link>
                    </li>
                )) ?? <li>No links found</li>}
                {/* Display message if no links */}
            </ul>
        </div>
    )
}

export default MobileNavMenu
