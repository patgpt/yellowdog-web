import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHQL_API_URL as string, {
    headers: {
        Authorization: 'Bearer ' + process.env.CONTENTFUL_ACCESS_TOKEN,
    },
})

export default client
