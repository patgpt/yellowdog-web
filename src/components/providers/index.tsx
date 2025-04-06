'use client'

import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="clight"
            themes={['clight', 'cdark']}
        >
            {children}
        </ThemeProvider>
    )
}
