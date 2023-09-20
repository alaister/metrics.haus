import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { MetricCard_metrics$key } from './__generated__/MetricCard_metrics.graphql'
import { Link } from 'react-router-dom'

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

  return (
    <Link to={`/metrics/${data.id}`}>
      <div className="rounded-lg border shadow p-4">hello from {data.name}</div>
    </Link>
  )
}

export const MetricCardSkeleton = () => {
  return <div className="rounded-lg border shadow">loading...</div>
}

export default MetricCard
