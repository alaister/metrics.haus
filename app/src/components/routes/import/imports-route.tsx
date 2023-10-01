import { Route, lazyRouteComponent } from '@tanstack/react-router'
import { loadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import environment from '~/lib/relay'
import { importsRoute_Query } from './__generated__/importsRoute_Query.graphql'
import importsLayoutRoute from './imports-layout-route'

export const query = graphql`
  query importsRoute_Query($cursor: Cursor, $count: Int) {
    ...ImportsList_query @arguments(cursor: $cursor, count: $count)
  }
`

const importsRoute = new Route({
  getParentRoute: () => importsLayoutRoute,
  path: '/imports',
  loader: () => {
    return {
      queryRef: loadQuery<importsRoute_Query>(environment, query, {}),
    }
  },
}).update({
  component: lazyRouteComponent(() => import('./Index')),
})

export default importsRoute
