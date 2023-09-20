import { graphql, useMutation, ConnectionHandler } from 'relay-runtime'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CommentsInsertInput } from './__generated__/CommentsInsert_Mutation.graphql'

const CommentsInsertMutation = graphql`
  mutation CommentsInsert_Mutation(
    $input: CommentsInsertInput!
    $connections: [ID!]!
  ) {
    insertIntoCommentsCollection(objects: [$input]) {
      affectedCount
      records
        @prependNode(connections: $connections, edgeTypeName: "MetricsEdge") {
        teamId
        metricId
        message
        replyTo
        profileId
      }
    }
  }
`
const commentSchema = z.object({
  comment: z.string().min(1, "Can't be empty"),
})

const Comments = () => {
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: '',
    },
  })

  const [mutate] = useMutation<CommentsInsertInput>(CommentsInsertMutation)
}

export default Comments
