import {
  PreloadedQuery,
  graphql,
  usePaginationFragment,
  usePreloadedQuery,
} from 'react-relay'
import { Outlet } from 'react-router-dom'
import MetricCard from '../metrics/MetricCard'
import { query } from './Metrics.data'
import { MetricsFragment_query$key } from './__generated__/MetricsFragment_query.graphql'
import { MetricsPagination_Query } from './__generated__/MetricsPagination_Query.graphql'

const MetricsFragment = graphql`
  fragment MetricsFragment_query on Query
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 100 }
  )
  @refetchable(queryName: "MetricsPagination_Query") {
    metricsCollection(
      after: $cursor
      first: $count
      orderBy: [{ createdAt: DescNullsLast }]
    ) @connection(key: "Metrics_query_metricsCollection") {
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
  query: MetricsFragment_query$key
}

const MetricsList = ({ query }: MetricsListProps) => {
  const {
    data,
    // loadNext,
    // loadPrevious,
    // hasNext,
    // hasPrevious,
    // isLoadingNext,
    // isLoadingPrevious,
    // refetch,
  } = usePaginationFragment(MetricsFragment, query)
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

export interface MetricsProps {
  queryRef: PreloadedQuery<MetricsPagination_Query>
}

const Metrics = ({ queryRef }: MetricsProps) => {
  const data = usePreloadedQuery(query, queryRef)

  return (
    <>
      <MetricsList query={data} />

      {/* Outlet for dialogs */}
      <Outlet />
    </>
  )
}

export default Metrics
