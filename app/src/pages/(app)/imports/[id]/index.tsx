import {
  FormControl,
  FormItem,
  FormLabel,
  Form,
  FormField,
} from '~/components/ui/Form'
import { Input } from '~/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/ui/Button'
import { Textarea } from '~/components/ui/Textarea'
import supabase from '~/lib/supabase'
import { useToast } from '~/lib/hooks/use-toast'
import { useParams } from '~/lib/router'
import { useState } from 'react'

const formSchema = z.object({
  columnSeparator: z.string(),
})

const ImportDetails = () => {
  const { id } = useParams('/imports/:id')
  const { toast } = useToast()

  const [timestampMapping, setTimestampMapping] = useState(
    JSON.stringify(
      {
        columnMapping: {
          type: 'index',
          index: 0,
        },
        timezone: 'Europe/Berlin',
      },
      null,
      2,
    ),
  )

  const [metricMappings, setMetricMappings] = useState(
    JSON.stringify(
      [
        {
          columnMapping: {
            type: 'name',
            name: 'WADB',
          },
          metricId: 'ccbd813f-4970-4760-929b-8752217e96da',
        },
      ],
      null,
      2,
    ),
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      columnSeparator: ',',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const updateMappings = async () => {
    const timestampParsed = JSON.parse(timestampMapping)
    const metricMappingsParsed = JSON.parse(metricMappings)
    await supabase
      .from('imports')
      .update({
        mapping: {
          csvOptions: {
            columnSeparator: form.getValues('columnSeparator'),
          },
          timestamp: timestampParsed,
          metricMappings: metricMappingsParsed,
        },
      })
      .eq('id', id)

    toast({
      description: 'Import updated',
    })
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-5 gap-4 items-center"
          >
            <FormField
              control={form.control}
              name="columnSeparator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Column Separator</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=";"
                      type="text"
                      autoFocus={true}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className="mt-4">
        <div>
          <Textarea
            value={timestampMapping}
            onChange={(e) => setTimestampMapping(e.target.value)}
            className="h-60"
          />

          <Textarea
            value={metricMappings}
            onChange={(e) => setMetricMappings(e.target.value)}
            className="h-60"
          />
        </div>
      </div>

      <div className="mt-4">
        <Button onClick={() => updateMappings()}>Import</Button>
      </div>
    </>
  )
}

export default ImportDetails
