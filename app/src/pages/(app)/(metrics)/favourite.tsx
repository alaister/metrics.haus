import { useQuery } from '@apollo/client'
import MetricsList from '~/components/metrics/MetricsList'
import { useFavouriteMetrics } from '~/lib/favouriteMetricsContext'
import { MetricsListQuery } from '.'

const IndexPage = () => {
  const { ids } = useFavouriteMetrics()

  const { data } = useQuery(MetricsListQuery)
  const metrics = data?.metricsCollection?.edges || []

  const filtered = metrics.filter((m) => ids.includes(m.node.id))

  return <MetricsList metrics={filtered} />
}

export default IndexPage
