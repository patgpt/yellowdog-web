/**
 * GraphQL Code Generator Configuration
 *
 * This file configures the GraphQL Code Generator to generate TypeScript types and
 * SDK functions from the Contentful GraphQL schema.
 *
 * @see https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config
 */
import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config({ path: '.env' })

/**
 * Contentful GraphQL schema configuration
 * Uses environment variables to connect to the Contentful GraphQL API:
 * - GRAPHQL_API_URL: The Contentful GraphQL API URL
 * - CONTENTFUL_ENVIRONMENT: The Contentful environment (e.g., 'master')
 * - CONTENTFUL_ACCESS_TOKEN: The Contentful access token for authentication
 */
const contentfulSchema = [
    {
        [`${process.env.GRAPHQL_API_URL}?environment=${process.env.CONTENTFUL_ENVIRONMENT}`]: {
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
        },
    },
]

/**
 * GraphQL Code Generator configuration
 */
const config: CodegenConfig = {
    // Contentful schema configuration
    schema: contentfulSchema,

    // GraphQL document patterns to include
    documents: ['src/graphql/**/*.{ts,tsx,js,jsx,graphql,gql}'],

    // Watch for changes in the GraphQL schema during development
    watch: true,

    // Ignore when no documents are found in the GraphQL schema
    ignoreNoDocuments: true,

    // Output file generation configuration
    generates: {
        // Generate TypeScript SDK with operations and resolvers
        'src/graphql/__generated__/sdk.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'typescript-resolvers'],
            config: {
                // Don't make fields optional
                avoidOptionals: true,

                // Include raw GraphQL requests in the generated SDK
                rawRequest: true,

                // Custom scalar type mappings for Contentful-specific types
                scalars: {
                    DateTime: 'string',
                    Json: 'Record<string, unknown>',
                    Dimension: 'number',
                    HexColor: 'string',
                    JSON: 'Record<string, unknown>',
                    Quality: 'number',
                },
            },
        },

        // Generate introspection JSON for tooling support
        'introspection.json': {
            plugins: ['introspection'],
            config: {
                minify: true,
            },
        },

        // Generate human-readable GraphQL schema file
        'schema.graphql': {
            plugins: ['schema-ast'],
            config: {
                rawRequest: true,
                includeDirectives: true,
                includeIntrospectionTypes: true,
                commentDescriptions: true,
            },
        },
    },
}

export default config
