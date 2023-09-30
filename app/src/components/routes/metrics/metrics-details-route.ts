import { Route, lazyRouteComponent } from '@tanstack/react-router'
import { loadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { z } from 'zod'
import { toGlobalId } from '~/lib/graphql'
import environment from '~/lib/relay'
import appLayoutRoute from '../app-layout-route'
import { metricsDetailsRoute_Query } from './__generated__/metricsDetailsRoute_Query.graphql'

export const query = graphql`
  query metricsDetailsRoute_Query($nodeId: ID!) {
    node(nodeId: $nodeId) {
      nodeId
      ... on Metrics {
        id
        name
        ...MetricDetailsSection_metrics
      }
    }
  }
`

const metricsDetailsRoute = new Route({
  getParentRoute: () => appLayoutRoute,
  path: '/metrics/$metricId',
  loader: ({ params }) => {
    const nodeId = toGlobalId(params.metricId, 'metrics')

    return {
      queryRef: loadQuery<metricsDetailsRoute_Query>(environment, query, {
        nodeId,
      }),
    }
  },
  validateSearch: z.object({
    showNewDataPointModal: z.boolean().default(false).optional(),
  }),
}).update({
  component: lazyRouteComponent(() => import('./MetricDetails')),
})

export default metricsDetailsRoute
