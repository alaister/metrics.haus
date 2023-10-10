import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import MetricCard from './MetricCard'
import { MetricsList_query$key } from './__generated__/MetricsList_query.graphql'

const MetricsFragment = graphql`
  fragment MetricsList_query on Query
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 100 }
  )
  @refetchable(queryName: "MetricsPagination_Query") {
    metricsCollection(
      after: $cursor
      first: $count
      orderBy: [{ createdAt: DescNullsLast }]
    ) @connection(key: "Metrics_query_metricsCollection", filters: []) {
      pageInfo {
        hasNextPage
        endCursor
      }
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

export interface MetricsListProps {
  queryFragment: MetricsList_query$key
}

const MetricsList = ({ queryFragment }: MetricsListProps) => {
  const {
    data,
    // loadNext,
    // loadPrevious,
    // hasNext,
    // hasPrevious,
    // isLoadingNext,
    // isLoadingPrevious,
    // refetch,
  } = usePaginationFragment(MetricsFragment, queryFragment)
  const metrics = data.metricsCollection?.edges ?? []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.length > 0 &&
        metrics.map(({ node: metric }) => (
          <MetricCard key={metric.nodeId} metric={metric} />
        ))}
    </div>
  )
}

export default MetricsList
