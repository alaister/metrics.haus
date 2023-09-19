import { Plus } from 'lucide-react'
import { loadQuery, usePreloadedQuery } from 'react-relay'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { graphql } from 'relay-runtime'
import environment from '~/lib/relay'
import MetricCard from '../metrics/MetricCard'
import { Button } from '../ui/Button'
import { Metrics_Query } from './__generated__/Metrics_Query.graphql'

export const MetricsQuery = graphql`
  query Metrics_Query {
    metricsCollection {
      edges {
        cursor
        node {
          nodeId
          ...MetricCard_metrics
        }
      }
    }
  }
`

export async function loader() {
  return {
    preloaded: loadQuery<Metrics_Query>(environment, MetricsQuery, {}),
  }
}

const Metrics = () => {
  const { preloaded } = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const data = usePreloadedQuery(MetricsQuery, preloaded)
  const metrics = data.metricsCollection?.edges ?? []

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight">
            Metrics
          </h1>

          <Button variant="outline" asChild>
            <Link to="new">
              <Plus className="w-4 h-4" />
              <span>New Metric</span>
            </Link>
          </Button>
        </div>

        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.length > 0 &&
            metrics.map(({ node: metric }) => (
              <MetricCard key={metric.nodeId} metric={metric} />
            ))}
        </div>
      </div>

      {/* Outlet for dialogs */}
      <Outlet />
    </>
  )
}

export default Metrics
