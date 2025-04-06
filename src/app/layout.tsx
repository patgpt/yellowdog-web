import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar'
import Providers from '@/components/providers'
import { fontSans, fontSerif } from '@/styles/fonts'
import '@/styles/globals.css'
import { RootLayoutProps } from '@/types/global'
import { cx } from '@/utils/cx'
import { getAppSettings } from '@/utils/queries'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
// Add viewport configuration for PWA theme color
export const viewport: Viewport = {
    themeColor: 'oklch(20% 0 0)', // Match manifest theme_color
}

export const metadata: Metadata = {
    // Link the manifest file
    manifest: '/icons/manifest.json',
    title: 'Yellowdog',
    description:
        'Yellowdog is an Interactive Design Studio based in Canada, specializing in creating engaging and user-friendly digital experiences.',
}

// TODO: Add support for multiple locales and next/internationalization
export async function generateStaticParams() {
    return [
        {
            locale: 'en-US',
        },
    ]
}

export default async function RootLayout({
    children,
    params,
}: RootLayoutProps) {
    const { locale } = await params
    const appSettings = await getAppSettings()
    const links = appSettings.data?.settings?.headerNavigationCollection
    if (!links) {
        return <div>No links found</div>
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={cx(
                    fontSans.variable,
                    fontSerif.variable,
                    'antialiased',
                )}
            >
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />

                    <Analytics />
                    <SpeedInsights />
                </Providers>
            </body>
        </html>
    )
}
// TODO: PWA - Install Dialog and Push Notification Manager needs to be fixed
