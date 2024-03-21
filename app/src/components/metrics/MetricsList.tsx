import MetricCard from './MetricCard'
import { MetricsListQueryQuery } from '~/lib/gql/graphql'

type MetricsType = NonNullable<
  MetricsListQueryQuery['metricsCollection']
>['edges']

const MetricsList = ({ metrics }: { metrics: MetricsType }) => {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {metrics.length > 0 &&
        metrics.map(({ node: metric }) => (
          <MetricCard key={metric.nodeId} metricNodeId={metric.nodeId} />
        ))}
    </div>
  )
}

export default MetricsList
