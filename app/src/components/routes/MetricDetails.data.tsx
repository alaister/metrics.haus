import { graphql } from 'relay-runtime'
import SkeletonList from '../loading/SkeletonList'
import { MetricDetailsSkeleton } from './MetricDetails'

export const query = graphql`
query MetricDetails_Query($nodeId: ID!) {
  node(nodeId: $nodeId) {
    nodeId
    ... on Metrics {
      id
      name
    }
  }
}
`

export const fallback = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <SkeletonList count={3} skeleton={MetricDetailsSkeleton} />
  </div>
)

