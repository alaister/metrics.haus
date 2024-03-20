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
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { urlIdToGlobalId } from '~/lib/ids'
import { graphql } from '~/lib/gql'

const formSchema = z.object({
  columnSeparator: z.string(),
  timestampMapping: z.string(),
  metricMappings: z.string(),
})

export const ImportQuery = graphql(/* GraphQL */ `
  query ImportsQuery($nodeId: ID!) {
    node(nodeId: $nodeId) {
      nodeId
      ... on Imports {
        nodeId
        id
        mapping
      }
    }
  }
`)

const ImportDetails = () => {
  const { id } = useParams('/imports/:id')
  const { toast } = useToast()

  const { data: importDetails, loading } = useQuery(ImportQuery, {
    variables: {
      nodeId: urlIdToGlobalId(id, 'imports'),
    },
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      columnSeparator: ',',
      timestampMapping: JSON.stringify(
        {
          columnMapping: {
            type: 'index',
            index: 1,
          },
          timezone: 'Europe/Berlin',
        },
        null,
        2,
      ),
      metricMappings: JSON.stringify(
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
    },
  })

  useEffect(() => {
    if (!loading && importDetails) {
      const mappings = JSON.parse(importDetails?.node?.mapping || '{}')

      form.setValue(
        'timestampMapping',
        JSON.stringify(mappings.timestamp, null, 2),
      )

      form.setValue(
        'metricMappings',
        JSON.stringify(mappings.metricMappings, null, 2),
      )
    }
  }, [importDetails, loading])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const timestampParsed = JSON.parse(values.timestampMapping)
    const metricMappingsParsed = JSON.parse(values.metricMappings)
    await supabase
      .from('imports')
      .update({
        mapping: {
          csvOptions: {
            columnSeparator: values.columnSeparator,
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

            <FormField
              control={form.control}
              name="timestampMapping"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timestamp Mapping</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-60" disabled={loading} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="metricMappings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Metric Mappings</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-60" disabled={loading} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="mt-4">
              <Button type="submit">Import</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default ImportDetails
