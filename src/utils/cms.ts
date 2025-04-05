import { getSdk, Sdk } from '@/graphql/sdk'
import client from './client'

const cms = (): Sdk => getSdk(client)

export default cms
