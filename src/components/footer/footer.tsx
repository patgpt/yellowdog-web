// footer.tsx

import Logo from '@/components/branding/logo'
import { getAppSettings } from '@/utils/queries'
import Image from 'next/image'
import Link from 'next/link'
export default async function Footer() {
    const appSettings = await getAppSettings()
    return (
        <>
            <footer className="footer bg-base-200 text-base-content grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-4">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    {appSettings.data?.settings?.footerSiteNavigationCollection?.items.map(
                        (link) => (
                            <Link
                                key={link?.href}
                                href={link?.href ?? ''}
                                className="link link-hover"
                            >
                                {link?.title}
                            </Link>
                        ),
                    )}
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    {appSettings.data?.settings?.footerServicesNavigationCollection?.items.map(
                        (link) => (
                            <Link
                                key={link?.href}
                                href={link?.href ?? ''}
                                className="link link-hover"
                            >
                                {link?.title}
                            </Link>
                        ),
                    )}
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    {appSettings.data?.settings?.footerLegalNavigationCollection?.items.map(
                        (link) => (
                            <Link
                                key={link?.href}
                                href={link?.href ?? ''}
                                className="link link-hover"
                            >
                                {link?.title}
                            </Link>
                        ),
                    )}
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 flex flex-col border-t px-10 py-4 md:flex-row md:justify-between">
                <aside className="mb-4 flex items-center gap-4 md:mb-0">
                    <Logo logo={appSettings.data?.settings?.logo?.url ?? ''} />
                    <p>
                        {appSettings.data?.settings?.siteTitle}
                        <br />
                        {appSettings.data?.settings?.siteDescription}
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end"></nav>
                <Image
                    src="/assets/katakana.png"
                    alt={appSettings.data?.settings?.siteTitle ?? ''}
                    width={180}
                    height={180}
                />
            </footer>
            <div className="border-base-300 bg-base-200 border-t p-4 text-center text-sm">
                {appSettings.data?.settings?.footerCopyrightText}
            </div>
        </>
    )
}
