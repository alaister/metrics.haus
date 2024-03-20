import { useFragment } from '@apollo/client'
import { graphql } from '~/lib/gql'
import CommentBody from './CommentBody'

const CommentFragment = graphql(/* GraphQL */ `
  fragment CommentFragment on Comments {
    nodeId
    id
    createdAt
    updatedAt
    body
    profile {
      nodeId
      id
      name
      avatarPath
    }
  }
`)

export interface CommentProps {
  commentNodeId: string
}

const Comment = ({ commentNodeId }: CommentProps) => {
  const { data: comment, complete } = useFragment({
    fragment: CommentFragment,
    fragmentName: 'CommentFragment',
    from: {
      nodeId: commentNodeId,
    },
  })

  if (!complete) {
    return null
  }

  return (
    <div>
      <CommentBody body={comment.body} />
    </div>
  )
}

export default Comment
