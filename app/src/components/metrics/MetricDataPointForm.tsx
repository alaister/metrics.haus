import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { graphql, useMutation } from 'react-relay'
import { z } from 'zod'
import ConfettiExplosion from 'react-confetti-explosion'
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
import { useToast } from '~/lib/hooks/use-toast'
import { MetricDataPointForm_Mutation } from './__generated__/MetricDataPointForm_Mutation.graphql'
import { DateTimePicker } from '../ui/DateTimePicker'
import { useState } from 'react'

const MetricDataPointInsertMutation = graphql`
  mutation MetricDataPointForm_Mutation($input: MetricsDataPointsInsertInput!) {
    insertIntoMetricsDataPointsCollection(objects: [$input]) {
      affectedCount
    }
  }
`

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      timestamp: new Date().toISOString(),
      value: undefined,
    },
  })

  const [mutate] = useMutation<MetricDataPointForm_Mutation>(
    MetricDataPointInsertMutation,
  )

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
