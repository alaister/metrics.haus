import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { MetricCard_metrics$key } from './__generated__/MetricCard_metrics.graphql'

const MetricCardFragment = graphql`
  fragment MetricCard_metrics on Metrics {
    id
    name
    createdAt
  }
`

export interface MetricCardProps {
  metric: MetricCard_metrics$key
}

const MetricCard = ({ metric }: MetricCardProps) => {
  const data = useFragment(MetricCardFragment, metric)

  return <div className="rounded-lg border shadow">hello from {data.name}</div>
}

export const MetricCardSkeleton = () => {
  return <div className="rounded-lg border shadow">loading...</div>
}

export default MetricCard
