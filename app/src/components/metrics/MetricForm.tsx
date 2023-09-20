import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ConnectionHandler, graphql, useMutation } from 'react-relay'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/Select'
import { useToast } from '~/lib/hooks/use-toast'
import { useAppSelector } from '~/stores'
import { MetricForm_Mutation } from './__generated__/MetricForm_Mutation.graphql'

const MetricInsertMutation = graphql`
  mutation MetricForm_Mutation(
    $input: MetricsInsertInput!
    $connections: [ID!]!
  ) {
    insertIntoMetricsCollection(objects: [$input]) {
      affectedCount
      records
        @prependNode(connections: $connections, edgeTypeName: "MetricsEdge") {
        nodeId
        ...MetricCard_metrics
      }
    }
  }
`

const formSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  interval: z.enum(['minute', 'hour', 'day', 'week', 'month']),
})

export interface MetricFormProps {
  onSuccess?: () => void
}

const MetricForm = ({ onSuccess }: MetricFormProps) => {
  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  const [mutate] = useMutation<MetricForm_Mutation>(MetricInsertMutation)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const connectionID = ConnectionHandler.getConnectionID(
      'root',
      'Metrics_query_metricsCollection',
      { orderBy: [{ createdAt: 'DescNullsLast' }] },
    )

    mutate({
      variables: {
        input: {
          name: values.name,
          interval: values.interval,
          teamId: selectedTeamId,
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
        toast({
          title: 'Metric created successfully',
        })

        form.reset({ name: '', interval: 'week' })

        onSuccess?.()
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="MRR" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interval</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Interval" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                  </SelectContent>
                </Select>
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
          <span>Save</span>
        </Button>
      </form>
    </Form>
  )
}

export default MetricForm
