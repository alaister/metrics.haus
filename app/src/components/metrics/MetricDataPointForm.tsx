import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { produce } from 'immer'
import { Save } from 'lucide-react'
import { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/Form'
import { Input } from '~/components/ui/Input'
import { graphql } from '~/lib/gql'
import {
  MetricDetailsQueryDocument,
  MetricsListQueryDocument,
} from '~/lib/gql/graphql'
import { useToast } from '~/lib/hooks/use-toast'
import { emitUserEvent } from '~/lib/userEvents'
import { useAppDispatch } from '~/stores'
import { refreshPoints } from '~/stores/points-slice'
import { DateTimePicker } from '../ui/DateTimePicker'
import { toGlobalId } from '~/lib/graphql'

const MetricDataPointInsertMutation = graphql(/* GraphQL */ `
  mutation MetricDataPointFormMutation($input: MetricsDataPointsInsertInput!) {
    insertIntoMetricsDataPointsCollection(objects: [$input]) {
      affectedCount
      records {
        nodeId
        time
        value
      }
    }
  }
`)

const formSchema = z.object({
  timestamp: z.string().datetime({ offset: true }),
  value: z.coerce.number({ required_error: "Can't be empty" }),
})

export interface MetricFormProps {
  onSuccess?: () => void
  metricId: string
}

const MetricForm = ({ onSuccess, metricId }: MetricFormProps) => {
  const { toast } = useToast()

  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      timestamp: new Date().toISOString(),
      value: undefined,
    },
  })

  const [mutate] = useMutation(MetricDataPointInsertMutation, {
    update(cache, { data }) {
      const record = data?.insertIntoMetricsDataPointsCollection?.records[0]
      if (record) {
        cache.updateQuery(
          {
            query: MetricDetailsQueryDocument,
            variables: { nodeId: toGlobalId(metricId, 'metrics') },
          },
          (data) =>
            produce(data, (draft) => {
              if (
                draft?.node?.__typename === 'Metrics' &&
                draft.node.metricsDataPointsCollection
              ) {
                draft.node.metricsDataPointsCollection.edges.push({
                  __typename: 'MetricsDataPointsEdge' as const,
                  node: record,
                })
                draft.node.metricsDataPointsCollection.edges.sort((a, b) => {
                  return (
                    new Date(a.node.time).getTime() -
                    new Date(b.node.time).getTime()
                  )
                })
              }
            }),
        )

        cache.updateQuery({ query: MetricsListQueryDocument }, (data) =>
          produce(data, (draft) => {
            const metricEdge = draft?.metricsCollection?.edges.find(
              (edge) => edge.node.id === metricId,
            )
            if (metricEdge) {
              metricEdge.node.metricsDataPointsCollection?.edges.push({
                __typename: 'MetricsDataPointsEdge' as const,
                node: record,
              })
              metricEdge.node.metricsDataPointsCollection?.edges.sort(
                (a, b) => {
                  return (
                    new Date(a.node.time).getTime() -
                    new Date(b.node.time).getTime()
                  )
                },
              )
            }
          }),
        )
      }
    },
  })

  const [isExploding, setIsExploding] = useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      variables: {
        input: {
          metricId,
          time: values.timestamp,
          value: values.value,
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
        toast({
          title: 'Data Point created successfully',
        })

        form.reset({
          timestamp: undefined,
          value: undefined,
        })

        setIsExploding(true)
        onSuccess?.()

        emitUserEvent('add_data_point').then(() => {
          dispatch(refreshPoints(true))
        })
      },
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input
                  placeholder="Value"
                  {...field}
                  type="number"
                  step="any"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timestamp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DateTimePicker
                  date={field.value ? new Date(field.value) : new Date()}
                  setDate={(d) => form.setValue('timestamp', d.toISOString())}
                  {...field}
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
          <Save className="w-4 h-4" />
          {isExploding && <ConfettiExplosion zIndex={1000} />}
          <span>Save</span>
        </Button>
      </form>
    </Form>
  )
}

export default MetricForm
