import { graphql, useMutation, ConnectionHandler } from 'react-relay'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '~/lib/hooks/use-toast'
import { useAppSelector } from '~/stores'
import { Input } from '../ui/Input'
import { useEffect, useRef } from 'react'
import { Button } from '../ui/Button'
import { CommentsFormInsert_Mutation } from './__generated__/CommentsFormInsert_Mutation.graphql'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form'
import { Plus } from 'lucide-react'

const CommentsInsertMutation = graphql`
  mutation CommentsFormInsert_Mutation(
    $input: CommentsInsertInput!
    $connections: [ID!]!
  ) {
    insertIntoCommentsCollection(objects: [$input]) {
      affectedCount
      records
        @prependNode(connections: $connections, edgeTypeName: "CommentsEdge") {
        teamId
        metricId
        message
        replyTo
        profileId
        timestamp
      }
    }
  }
`
const commentSchema = z.object({
  comment: z.string().min(1, "Can't be empty"),
})

type CommentsFormProps = {
  date: Date
  onSuccess: () => void
  metricId: string
}

const CommentsForm = ({ date, onSuccess, metricId }: CommentsFormProps) => {
  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)

  const { toast } = useToast()

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: '',
    },
  })

  const [mutate] = useMutation<CommentsFormInsert_Mutation>(
    CommentsInsertMutation,
  )

  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.scrollIntoView()
  }, [])

  async function onSubmit(values: z.infer<typeof commentSchema>) {
    const connectionID = ConnectionHandler.getConnectionID(
      'root',
      'Comments_query_commentsCollection',
      { orderBy: [{ createdAt: 'DescNullsLast' }] },
    )

    mutate({
      variables: {
        input: {
          message: values.comment,
          metricId,
          teamId: selectedTeamId,
          timestamp: date.toISOString(),
        },
        connections: [connectionID],
      },
      onError(error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: error.message,
        })
      },
      onCompleted() {
        form.reset({ comment: '' })
        onSuccess?.()
      },
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex justify-between space-x-2"
      >
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="w-full"
                  ref={inputRef}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-end"
          isLoading={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
        >
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  )
}

export default CommentsForm
