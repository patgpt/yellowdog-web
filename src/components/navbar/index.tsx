import { getAppSettings } from '@/utils/queries'
import Link from 'next/link'
import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import Logo from '../branding/logo'
import ThemeController from '../theme-controller'

const Navbar: React.FC = async (): Promise<React.ReactElement> => {
    const appSettings = await getAppSettings()
    const links = appSettings.data?.settings?.headerNavigationCollection
    const logo = appSettings.data?.settings?.logo?.url
    if (!links || !logo) {
        throw new Error('No links or logo found')
    }
    return (
        <div className="drawer sticky top-0 z-50">
            {/* Hidden checkbox to control the drawer */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 shadow-secondary/20 sticky w-full px-4 opacity-85 shadow-2xl backdrop-blur-3xl">
                    {/* Hamburger menu for small screens */}
                    <div className="flex-none sm:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <FaBarsStaggered />
                        </label>
                    </div>
                    {/* Logo/Title */}
                    <div className="mx-2 flex-1 px-2">
                        <Link href="/" className="text-xl">
                            {logo ? <Logo logo={logo} /> : 'Yellowdog'}
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden flex-none sm:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {links.items.map((link) => (
                                <li key={link?.href}>
                                    <Link href={link?.href ?? ''}>{link?.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <ThemeController />
                    </div>
                </div>
                {/* Page content here (passed as children or rendered separately) */}
                {/* Example: Add {children} if this wraps page content */}
            </div>
            {/* Drawer sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {links.items.map((link) => (
                        <li key={link?.href}>
                            <Link href={link?.href ?? ''}>{link?.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
