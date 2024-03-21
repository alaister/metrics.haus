import { useQuery } from '@apollo/client'
import MetricsList from '~/components/metrics/MetricsList'
import { graphql } from '~/lib/gql'

export const MetricsListQuery = graphql(/* GraphQL */ `
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

const IndexPage = () => {
  const { data } = useQuery(MetricsListQuery)
  const metrics = data?.metricsCollection?.edges || []

  return <MetricsList metrics={metrics} />
}

export default IndexPage
