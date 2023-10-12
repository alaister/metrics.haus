import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ConnectionHandler, graphql, useMutation } from 'react-relay'
import { z } from 'zod'
import TeamMembersSelector from '~/components/members/TeamMembersSelector'
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
import { emitUserEvent } from '~/lib/userEvents'
import { useAppDispatch, useAppSelector } from '~/stores'
import { refreshPoints } from '~/stores/points-slice'
import { MetricForm_Mutation } from './__generated__/MetricForm_Mutation.graphql'
import { MetricForm_Owners_Mutation } from './__generated__/MetricForm_Owners_Mutation.graphql'

const MetricInsertMutation = graphql`
  mutation MetricForm_Mutation(
    $input: MetricsInsertInput!
    $connections: [ID!]!
  ) {
    insertIntoMetricsCollection(objects: [$input]) {
      affectedCount
      records
        @prependNode(connections: $connections, edgeTypeName: "MetricsEdge") {
        id
        nodeId
        ...MetricCard_metrics
      }
    }
  }
`

const MetricOwnersInsertMutation = graphql`
  mutation MetricForm_Owners_Mutation($input: [MetricsOwnersInsertInput!]!) {
    insertIntoMetricsOwnersCollection(objects: $input) {
      affectedCount
    }
  }
`

const formSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  interval: z.enum(['minute', 'hour', 'day', 'week', 'month']),
  unitShort: z.string().max(3).optional(),
  members: z.optional(z.string().array()),
})

export interface MetricFormProps {
  onSuccess?: () => void
}

const MetricForm = ({ onSuccess }: MetricFormProps) => {
  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)
  const dispatch = useAppDispatch()

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      unitShort: '',
    },
  })

  const [mutate] = useMutation<MetricForm_Mutation>(MetricInsertMutation)
  const [mutateOwners] = useMutation<MetricForm_Owners_Mutation>(
    MetricOwnersInsertMutation,
  )

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      variables: {
        input: {
          name: values.name,
          interval: values.interval,
          unitShort: values.unitShort,
          teamId: selectedTeamId,
        },
        connections: [
          ConnectionHandler.getConnectionID(
            'root',
            'Metrics_query_metricsCollection',
          ),
        ],
      },
      onError(error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: error.message,
        })
      },
      onCompleted(response) {
        function onDone() {
          toast({ title: 'Metric created successfully' })
          form.reset({ name: '', interval: 'week', members: [], unitShort: '' })
          onSuccess?.()
          emitUserEvent('add_metric', values.name).then(() => {
            dispatch(refreshPoints(true))
          })
        }

        if (values.members && values.members.length > 0) {
          const metricId = response.insertIntoMetricsCollection!.records[0].id
          mutateOwners({
            variables: {
              input: values.members.map((x) => ({
                metricId,
                profileId: x,
              })),
            },
            onError(error) {
              toast({
                variant: 'destructive',
                title: 'Something went wrong',
                description: error.message,
              })
            },
            onCompleted() {
              onDone()
            },
          })
        } else {
          onDone()
        }
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
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="unitShort"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit (Short)</FormLabel>
              <FormControl>
                <Input placeholder="$, €, %, ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedTeamId !== null && (
          <FormField
            control={form.control}
            name="members"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Metric Owners</FormLabel>
                <FormControl>
                  <TeamMembersSelector
                    onValueChange={field.onChange}
                    selectedTeamId={selectedTeamId}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

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
