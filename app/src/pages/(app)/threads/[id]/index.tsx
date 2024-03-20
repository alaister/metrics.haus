import { useQuery } from '@apollo/client'
import Comment from '~/components/comments/Comment'
import CommentsForm from '~/components/comments/CommentsForm'
import { graphql } from '~/lib/gql'
import { urlIdToGlobalId } from '~/lib/ids'
import { useParams } from '~/lib/router'

export const ThreadQuery = graphql(/* GraphQL */ `
  query ThreadQuery($nodeId: ID!) {
    node(nodeId: $nodeId) {
      nodeId
      ... on Threads {
        nodeId
        id
        createdAt
        title
        fromTimestamp
        toTimestamp
        commentsCollection(orderBy: { createdAt: AscNullsLast }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node {
              nodeId
              ...CommentFragment
            }
          }
        }
      }
    }
  }
`)

const ThreadPage = () => {
  const { id: urlId } = useParams('/threads/:id')

  const { data: thread } = useQuery(ThreadQuery, {
    variables: {
      nodeId: urlIdToGlobalId(urlId, 'threads'),
    },
  })

  return (
    <div>
      {thread?.node?.__typename === 'Threads' && (
        <>
          {thread.node.commentsCollection?.edges.map((comment) => (
            <Comment
              key={comment.node.id}
              commentNodeId={comment.node.nodeId}
            />
          ))}

          <CommentsForm threadId={thread.node.id} />
        </>
      )}
    </div>
  )
}

export default ThreadPage
