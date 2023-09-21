import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Comments_metrics$key } from './__generated__/Comments_metrics.graphql'

const CommentsFragment = graphql`
  fragment Comments_metrics on Metrics {
    id
    dataPoints: metricsDataPointsCollection {
      totalCount
    }
    commentsCollection {
      edges {
        node {
          profileId
          message
          replyTo
          timestamp
        }
      }
    }
    ...LineChart_metrics
  }
`

export interface CommentsProps {
  comments: Comments_metrics$key
}

const Comments = ({ comments }: CommentsProps) => {
  const data = useFragment(CommentsFragment, comments)

  return (
    <ul>
      {data.commentsCollection?.edges.map((c) => <span>{c.node.message}</span>)}
    </ul>
  )
}
export default Comments
