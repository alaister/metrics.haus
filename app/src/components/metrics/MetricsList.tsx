import { useQuery } from '@apollo/client'
import { graphql } from '~/lib/gql'
import MetricCard from './MetricCard'

const MetricsListQuery = graphql(/* GraphQL */ `
  query MetricsListQuery {
    metricsCollection(
      orderBy: [{ createdAt: DescNullsLast }]
      filter: { archived: { eq: false } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          nodeId
          ...MetricCardItem @nonreactive
        }
      }
    }
  }
`)

const MetricsList = () => {
  const { data } = useQuery(MetricsListQuery)

  const metrics = data?.metricsCollection?.edges ?? []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.length > 0 &&
        metrics.map(({ node: metric }) => (
          <MetricCard key={metric.nodeId} metricNodeId={metric.nodeId} />
        ))}
    </div>
  )
}

export default MetricsList
