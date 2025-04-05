import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
const fontSans = Noto_Sans_JP({
    variable: '--font-sans',
    subsets: ['latin'],
})

const fontSerif = Noto_Serif_JP({
    variable: '--font-serif',
    subsets: ['latin'],
})

export { fontSans, fontSerif }
