import { NavigationLink } from '@/graphql/__generated__/sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

/**
 * Props for the DesktopNavMenu component.
 */
interface DesktopNavMenuProps {
    items: (NavigationLink | null)[] | null | undefined
}

/**
 * Renders the desktop navigation menu, including hoverable submenus.
 * @param {DesktopNavMenuProps} props - Component props.
 * @returns {React.ReactElement | null} The rendered desktop navigation menu.
 */
const DesktopNavMenu: React.FC<DesktopNavMenuProps> = ({
    items,
}): React.ReactElement | null => {
    if (!items) {
        throw new Error('No items provided to DesktopNavMenu')
    }
    return (
        <div className="hidden flex-none sm:block">
            <ul className="menu menu-horizontal px-1">
                {items.map((link: NavigationLink | null, index: number) => {
                    // Check if there are valid subnavigation items
                    const hasSubNav =
                        link?.subnavigationCollection?.items?.length
                    console.log(hasSubNav)
                    return (
                        <li
                            key={link?.href || index}
                            className={`relative ${hasSubNav ? 'dropdown dropdown-hover z-50' : ''}`}
                        >
                            {/* Main link - acts as dropdown trigger if subnav exists */}
                            <Link
                                href={link?.href ?? '#'}
                                className="flex items-center gap-2"
                                tabIndex={hasSubNav ? 0 : undefined}
                                role={hasSubNav ? 'button' : undefined}
                            >
                                {link?.icon?.url && (
                                    <Image
                                        src={link.icon.url}
                                        alt={link.icon.title ?? ''}
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                )}

                                {link?.title ?? 'Missing Title'}
                                {/* Optional: Add a dropdown indicator icon */}
                                {hasSubNav && <FaChevronDown />}
                            </Link>

                            {/* Submenu - Rendered if subnav exists */}
                            {hasSubNav && (
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content bg-base-100 rounded-box z-[51] mt-2 w-52 p-2 shadow-xl"
                                >
                                    {link?.subnavigationCollection?.items.map(
                                        (child: NavigationLink | null) =>
                                            child ? (
                                                <li key={child.href}>
                                                    <Link
                                                        href={child.href ?? '#'}
                                                    >
                                                        {child.title ??
                                                            'Missing Title'}
                                                    </Link>
                                                </li>
                                            ) : null,
                                    )}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DesktopNavMenu
