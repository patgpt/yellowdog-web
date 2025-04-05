// hero.tsx - A hero section for the footer
import Link from 'next/link'

interface HeroProps {
    title: string
    headline: string
    buttonText: string
    buttonLink: string
    image: string | null
}

export default function Hero({ title, headline, buttonText, buttonLink, image }: HeroProps): React.ReactElement {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{headline}</p>
                    <Link href={buttonLink} className="btn btn-primary">
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    )
}
