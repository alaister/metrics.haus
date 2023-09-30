import { Route, lazyRouteComponent } from '@tanstack/react-router'
import { loadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { z } from 'zod'
import environment from '~/lib/relay'
import { indexRoute_Query } from './__generated__/indexRoute_Query.graphql'
import metricsLayoutRoute from './metrics/metrics-layout-route'

export const query = graphql`
  query indexRoute_Query($cursor: Cursor, $count: Int) {
    ...MetricsList_query @arguments(cursor: $cursor, count: $count)
  }
`

const indexRoute = new Route({
  getParentRoute: () => metricsLayoutRoute,
  path: '/',
  loader: () => {
    return {
      queryRef: loadQuery<indexRoute_Query>(environment, query, {}),
    }
  },
  validateSearch: z.object({
    showNewMetricModal: z.boolean().default(false).optional(),
  }),
}).update({
  component: lazyRouteComponent(() => import('./Index')),
})

export default indexRoute
