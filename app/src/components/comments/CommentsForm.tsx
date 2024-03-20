import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { produce } from 'immer'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { graphql } from '~/lib/gql'
import { ThreadQueryDocument } from '~/lib/gql/graphql'
import { useToast } from '~/lib/hooks/use-toast'
import { toGlobalId } from '~/lib/ids'
import { Button } from '../ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form'
import { Input } from '../ui/Input'

const CommentsInsertMutation = graphql(/* GraphQL */ `
  mutation CommentsFormInsertMutation($input: CommentsInsertInput!) {
    insertIntoCommentsCollection(objects: [$input]) {
      affectedCount
      records {
        nodeId
        ...CommentFragment
      }
    }
  }
`)

const commentSchema = z.object({
  comment: z.string().min(1, "Can't be empty"),
})

export interface CommentsFormProps {
  threadId: string
  replyTo?: string
  onSuccess?: () => void
}

const CommentsForm = ({ threadId, onSuccess }: CommentsFormProps) => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: '',
    },
  })

  const [mutate] = useMutation(CommentsInsertMutation, {
    update(cache, { data }) {
      const record = data?.insertIntoCommentsCollection?.records[0]
      if (record) {
        cache.updateQuery(
          {
            query: ThreadQueryDocument,
            variables: { nodeId: toGlobalId(threadId, 'threads') },
          },
          (prevData) =>
            produce(prevData, (draft) => {
              if (draft?.node?.__typename === 'Threads') {
                draft.node.commentsCollection?.edges.push({
                  __typename: 'CommentsEdge' as const,
                  cursor: '',
                  node: record,
                })
              }
            }),
        )
      }
    },
  })

  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.scrollIntoView()
  }, [])

  async function onSubmit(values: z.infer<typeof commentSchema>) {
    mutate({
      variables: {
        input: {
          body: values.comment,
          threadId,
        },
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
              <FormLabel>Comment</FormLabel>
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
