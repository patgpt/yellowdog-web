import { NavigationLink } from '@/graphql/__generated__/sdk'
import { getAppSettings } from '@/utils/queries'
import Link from 'next/link'
import React from 'react'
import Logo from '../branding/logo'
import DesktopNavMenu from './DesktopNavMenu'
import HamburgerButton from './HamburgerButton'
import MobileNavMenu from './MobileNavMenu'
import ThemeController from './theme-controller'

/**
 * Main Navbar component that orchestrates the logo, navigation menus, and theme controller.
 * Fetches app settings to get navigation links and logo.
 * @returns {Promise<React.ReactElement>} The rendered Navbar component.
 */
const Navbar: React.FC = async (): Promise<React.ReactElement> => {
    const appSettings = await getAppSettings()
    const links = appSettings.data?.settings?.headerNavigationCollection?.items
    const logoUrl = appSettings.data?.settings?.logo?.url

    return (
        <div className="drawer sticky top-0 z-50">
            {/* Hidden checkbox to control the drawer */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar Bar */}
                <div className="navbar bg-base-300/85 shadow-secondary/20 sticky w-full px-4 shadow-lg backdrop-blur-md">
                    {/* Hamburger Button (Mobile) */}
                    <HamburgerButton />

                    {/* Logo/Title */}
                    <div className="mx-2 flex-1 px-2">
                        <Link href="/" className="text-xl font-semibold">
                            {logoUrl ? (
                                <Logo logo={logoUrl} />
                            ) : (
                                <div className="text-xl font-semibold">
                                    {appSettings.data?.settings?.siteTitle}
                                </div>
                            )}
                        </Link>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <DesktopNavMenu items={links as NavigationLink[]} />

                    {/* Theme Controller */}
                    <ThemeController />
                </div>
                {/* Page content is rendered outside the Navbar component by Next.js Layout */}
            </div>

            {/* Mobile Navigation Drawer/Sidebar */}
            <MobileNavMenu items={links} />
        </div>
    )
}

export default Navbar
