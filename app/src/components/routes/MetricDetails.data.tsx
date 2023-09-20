import { graphql } from 'relay-runtime'

export const query = graphql`
  query MetricDetails_Query($nodeId: ID!) {
    node(nodeId: $nodeId) {
      nodeId
      ... on Metrics {
        id
        name
        ...MetricDetailsSection_metrics
      }
    }
  }
`

export const fallback = <div>LOADING TODO BETTER LOADER LATERRRR</div>
