import { graphql } from 'relay-runtime'
import SkeletonList from '../loading/SkeletonList'
import { MetricCardSkeleton } from '../metrics/MetricCard'

export const query = graphql`
  query Metrics_Query($cursor: Cursor, $count: Int) {
    ...MetricsFragment_query @arguments(cursor: $cursor, count: $count)
  }
`

export const fallback = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <SkeletonList count={3} skeleton={MetricCardSkeleton} />
  </div>
)
