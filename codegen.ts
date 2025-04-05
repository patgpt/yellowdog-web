import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const contentfulSchema = [
    {
        [`${process.env.GRAPHQL_API_URL}?environment=${process.env.CONTENTFUL_ENVIRONMENT}`]: {
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
        },
    },
]

const config: CodegenConfig = {
    schema: contentfulSchema, // Contentful schema, you can add more schemas if needed.
    documents: ['src/graphql/**/*.{ts,tsx,js,jsx,graphql,gql}'], // You can add more file extensions if needed. I personally prefer gql files.
    watch: true, // Watch for changes in the GraphQL schema in development mode. if you don't want to watch, set it to false.
    ignoreNoDocuments: true, // Ignore no documents found in the GraphQL schema. if you don't want to ignore, set it to false.
    generates: {
        'src/graphql/sdk.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'typescript-resolvers'],
            config: {
                avoidOptionals: true,
                rawRequest: true,
                scalars: {
                    DateTime: 'string', // Map Contentful DateTime to string
                    Json: 'Record<string, unknown>', // Map Contentful Json (often used for Rich Text) to a generic object
                    Dimension: 'number',
                    HexColor: 'string',
                    JSON: 'Record<string, unknown>', // Adding mapping for uppercase JSON
                    Quality: 'number',
                },
            },
        },
        'introspection.json': {
            plugins: ['introspection'],
            config: {
                minify: true,
            },
        },
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
