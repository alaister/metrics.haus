import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { produce } from 'immer'
import { Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
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
import { graphql } from '~/lib/gql'
import { MetricInterval, MetricsListQueryDocument } from '~/lib/gql/graphql'
import { useToast } from '~/lib/hooks/use-toast'
import { useAppSelector } from '~/stores'
import CreatableSelect from 'react-select/creatable'

const MetricInsertMutation = graphql(/* GraphQL */ `
  mutation MetricFormMutation($input: MetricsInsertInput!) {
    insertIntoMetricsCollection(objects: [$input]) {
      affectedCount
      records {
        id
        nodeId
        ...MetricCardItem
      }
    }
  }
`)

const MetricOwnersInsertMutation = graphql(/* GraphQL */ `
  mutation MetricFormOwnersMutation($input: [MetricsOwnersInsertInput!]!) {
    insertIntoMetricsOwnersCollection(objects: $input) {
      affectedCount
    }
  }
`)

const formSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  interval: z.nativeEnum(MetricInterval),
  unitShort: z.string().max(3).optional(),
  members: z.optional(z.string().array()),
  tags: z.optional(z.string().array()),
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
      unitShort: '',
      tags: [],
    },
  })

  const [mutate] = useMutation(MetricInsertMutation, {
    update(cache, { data }) {
      const record = data?.insertIntoMetricsCollection?.records[0]
      if (record) {
        cache.updateQuery({ query: MetricsListQueryDocument }, (data) =>
          produce(data, (draft) => {
            draft?.metricsCollection?.edges.unshift({
              __typename: 'MetricsEdge' as const,
              cursor: '',
              node: record,
            })
          }),
        )
      }
    },
  })
  const [mutateOwners] = useMutation(MetricOwnersInsertMutation)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      variables: {
        input: {
          name: values.name,
          interval: values.interval,
          unitShort: values.unitShort,
          teamId: selectedTeamId,
          tags: values.tags,
        },
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
          form.reset({
            name: '',
            interval: MetricInterval.Week,
            members: [],
            unitShort: '',
            tags: [],
          })
          onSuccess?.()
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
                    <SelectItem value={MetricInterval.Minute}>
                      Minute
                    </SelectItem>
                    <SelectItem value={MetricInterval.Day}>Day</SelectItem>
                    <SelectItem value={MetricInterval.Week}>Week</SelectItem>
                    <SelectItem value={MetricInterval.Month}>Month</SelectItem>
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

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <CreatableSelect
                  defaultValue={field.value?.map((it) => ({
                    label: it,
                    value: it,
                  }))}
                  onChange={(values) =>
                    field.onChange(values.map((it) => it.value))
                  }
                  isMulti
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                  })}
                  // copy pasta https://stackoverflow.com/a/74481208/1476137
                  styles={{
                    control: (base) => ({
                      ...base,
                      boxShadow: 'none',
                      borderColor: '#e5e7eb',
                      '&:hover': { borderColor: '#e5e7eb' },
                      fontFamily: 'Inter var',
                      fontSize: '14px',
                    }),
                  }}
                />
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
