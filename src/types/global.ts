import React from 'react'

export type RootLayoutProps = Readonly<{
    children: React.ReactNode
    params: Promise<{
        locale: string
        slug: string
    }>
}>

export type GetDataProps = {
    preview: boolean
    locale: string
    slug?: string
}
