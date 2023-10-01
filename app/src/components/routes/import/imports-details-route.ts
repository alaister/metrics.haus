import { Route, lazyRouteComponent } from '@tanstack/react-router'
import { loadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { toGlobalId } from '~/lib/graphql'
import environment from '~/lib/relay'
import appLayoutRoute from '../app-layout-route'
import { importDetailsRoute_Query } from './__generated__/importDetailsRoute_Query.graphql'

export const query = graphql`
  query importsDetailsRoute_Query($nodeId: ID!) {
    node(nodeId: $nodeId) {
      nodeId
      ... on Imports {
        id
        status
      }
    }
  }
`

const importDetailsRoute = new Route({
  getParentRoute: () => appLayoutRoute,
  path: '/imports/$importId',
  loader: ({ params }) => {
    const nodeId = toGlobalId(params.importId, 'imports')

    return {
      queryRef: loadQuery<importDetailsRoute_Query>(environment, query, {
        nodeId,
      }),
    }
  },
}).update({
  component: lazyRouteComponent(() => import('./ImportDetails')),
})

export default importDetailsRoute
