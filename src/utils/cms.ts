import { getSdk, Sdk } from '@/graphql/__generated__/sdk'
import client from './client'

const cms = (): Sdk => getSdk(client)

export default cms
