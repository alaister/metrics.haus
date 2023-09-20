import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { Outlet } from 'react-router-dom'
import MetricCard from '../metrics/MetricCard'
import { query } from './Metrics.data'
import { Metrics_Query } from './__generated__/Metrics_Query.graphql'

export interface MetricsProps {
  queryRef: PreloadedQuery<Metrics_Query>
}

const Metrics = ({ queryRef }: MetricsProps) => {
  const data = usePreloadedQuery(query, queryRef)
  const metrics = data.metricsCollection?.edges ?? []

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.length > 0 &&
          metrics.map(({ node: metric }) => (
            <MetricCard key={metric.nodeId} metric={metric} />
          ))}
      </div>

      {/* Outlet for dialogs */}
      <Outlet />
    </>
  )
}

export default Metrics
