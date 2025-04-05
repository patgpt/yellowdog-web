import { GetSettingsQuery } from '@/graphql/sdk'
import { GraphQLError } from 'graphql'
import cms from './cms'

export const getAppSettings = async (): Promise<{
    data: GetSettingsQuery
    errors: GraphQLError[] | undefined
    status: number
}> => {
    const appSettings = await cms().getSettings({ id: '5fUQZNyr08jPLDXNw94LMP' })
    if (!appSettings) {
        throw new Error('Failed to fetch app settings')
    }

    const { data, errors, status } = appSettings
    if (errors) {
        throw new Error('Failed to fetch app settings', { cause: errors })
    }
    return {
        data,
        errors,
        status,
    }
}









// Let's create a fetcher here that will be used to fetch data from the API
