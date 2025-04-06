import Hero from '@/components/hero'
import FeatureCard from '@/components/molecules/FeatureCard'
// No longer using FeatureCard directly on this page
// import FeatureCard from '@/components/molecules/FeatureCard'
import {
    ComponentFeature,
    ComponentHero,
    GetLandingPageByIdQuery,
} from '@/graphql/__generated__/sdk' // Import Query type
import { GetDataProps } from '@/types/global'
import cms from '@/utils/cms'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { PageProps } from '../../.next/types/app/page'
// Fallback features array is removed as we rely on fetched data or error out

// Data fetching function now returns the full query result or triggers notFound
const getData = async ({
    preview,
    locale,
}: GetDataProps): Promise<GetLandingPageByIdQuery> => {
    try {
        const res = await cms().getLandingPageById({
            id: '54W4Nbkf44kEnL6NOreA1t',
            locale,
            preview,
        })

        if (res.errors) {
            // Log the specific GraphQL errors
            console.error('GraphQL Errors:', res.errors)
            throw new Error(res.errors.map((e) => e.message).join('\n'))
        }

        const data = res.data

        if (!data?.pageLanding) {
            // Check for pageLanding specifically
            return notFound() // Trigger 404 if pageLanding not found
        }

        // Return the whole data object matching the Query type
        return data as GetLandingPageByIdQuery
    } catch (error) {
        console.error('Failed to fetch landing page:', error)
        // Re-throwing allows Next.js error handling (e.g., error.tsx) to catch it
        // Or trigger notFound() if preferred for fetch errors
        notFound()
        // throw error; // Alternatively, uncomment to use error.tsx
    }
}

/**
 * Home page component that displays a landing page with a hero section and feature cards.
 * @param {PageProps} params - The parameters for the page.
 * @returns {Promise<JSX.Element>} The rendered home page.
 */
export default async function Home({
    params,
}: PageProps): Promise<React.ReactNode> {
    const { locale } = await params
    const { isEnabled: preview } = await draftMode()

    // pageData will be of type GetLandingPageByIdQuery
    const pageData = await getData({ preview, locale })

    // Extract pageLanding for easier access, we know it exists due to checks in getData
    const landingPage = pageData.pageLanding!

    return (
        <div className="flex min-h-screen w-full flex-col">
            {/* Conditionally render Hero using the extracted landingPage */}
            {landingPage.hero && (
                // Type assertion is still needed if Hero prop type doesn't accept null/undefined
                <Hero hero={landingPage.hero as ComponentHero} />
            )}

            {/* Heading from Hero or fallback */}
            <h1 className="my-16 text-center text-4xl font-bold">
                {landingPage.hero?.heading ?? '🔧 Built Different'}
            </h1>

            {/* Feature cards - responsive grid */}
            <div className="mx-auto my-16 grid max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {landingPage.featureCardsCollection?.items.map((feature) => {
                    console.log(feature)
                    return feature ? (
                        <FeatureCard
                            key={feature.sys.id}
                            {...(feature as ComponentFeature)}
                        />
                    ) : null
                })}
            </div>
        </div>
    )
}
