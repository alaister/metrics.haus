import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Comments_metrics$key } from './__generated__/Comments_metrics.graphql'
import CommentsForm from './CommentsForm'

const CommentsFragment = graphql`
  fragment Comments_metrics on Metrics {
    id
    dataPoints: metricsDataPointsCollection {
      totalCount
    }
    commentsCollection {
      edges {
        node {
          id
          profileId
          message
          replyTo
          timestamp
          createdAt
        }
      }
    }
  }
`

export interface CommentsProps {
  commentsKey: Comments_metrics$key
  openThread: string
}

const Comments = ({ commentsKey, openThread }: CommentsProps) => {
  const data = useFragment(CommentsFragment, commentsKey)

  const comments = data.commentsCollection?.edges.map((c) => c.node) ?? []

  const firstCommentOfThread = comments.find((c) => c.id == openThread)

  if (!firstCommentOfThread) return null

  const openedAndSortedComments = comments
    .filter((c) => c.id == openThread || c.replyTo == openThread)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    )

  return (
    <div>
      <ul className="space-y-2 divide-y divide-gray-100">
        {openedAndSortedComments.map((c) => (
          <li
            className="px-2 py-4 shadow rounded border border-gray-100"
            key={c.id}
          >
            {c.timestamp} {c.message}
          </li>
        ))}
      </ul>
      <CommentsForm
        replyTo={openThread}
        metricId={data.id}
        date={new Date(firstCommentOfThread.timestamp)}
      />
    </div>
  )
}
export default Comments
