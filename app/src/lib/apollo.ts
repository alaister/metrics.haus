import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  defaultDataIdFromObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { relayStylePagination } from '@apollo/client/utilities'
import possibleTypes from '~/lib/gql/possible-types.json'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './config'
import supabase from './supabase'

const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    if ('nodeId' in responseObject) {
      return `${responseObject.nodeId}`
    }

    return defaultDataIdFromObject(responseObject)
  },
  possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        metricsCollection: relayStylePagination(),
        node: {
          read(_, { args, toReference }) {
            const ref = toReference({
              nodeId: args?.nodeId,
            })

            return ref
          },
        },
      },
    },
    Metrics: {
      fields: {
        threadsCollection: relayStylePagination(),
      },
    },
    Threads: {
      fields: {
        commentsCollection: relayStylePagination(),
      },
    },
  },
})

const httpLink = createHttpLink({
  uri: `${SUPABASE_URL}/graphql/v1`,
  headers: {
    apikey: SUPABASE_ANON_KEY,
  },
})

const authLink = setContext(async (_, { headers }) => {
  const token = (await supabase.auth.getSession()).data.session?.access_token

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export default apolloClient
