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
import { useEffect, useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { urlIdToGlobalId } from '~/lib/ids'
import { graphql } from '~/lib/gql'
import { SUPABASE_FUNCTIONS_BASE_URL } from '~/lib/config'

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
        status
        createdAt
        fileName
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

  const importDetailsNode = useMemo(() => {
    if (importDetails?.node?.__typename === 'Imports') {
      return importDetails.node
    } else {
      return null
    }
  }, [importDetails])

  console.log(importDetailsNode)

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
            metricId: '',
          },
        ],
        null,
        2,
      ),
    },
  })

  useEffect(() => {
    if (importDetailsNode) {
      const mappings = JSON.parse(importDetailsNode.mapping || '{}')

      console.log(mappings)

      form.setValue(
        'timestampMapping',
        JSON.stringify(mappings.timestamp, null, 2),
      )

      form.setValue(
        'metricMappings',
        JSON.stringify(mappings.metricMappings, null, 2),
      )
    }
  }, [importDetailsNode])

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
      description: 'Import saved',
    })
  }

  async function runImport() {
    const session = await supabase.auth.getSession()

    fetch(`${SUPABASE_FUNCTIONS_BASE_URL}/functions/v1/import-data`, {
      method: 'POST',
      body: JSON.stringify({
        importId: id,
      }),
      headers: {
        Authorization: `Bearer ${session.data.session?.access_token}`,
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-3 gap-4">
              <FormItem>
                <FormLabel>File</FormLabel>
                <FormControl>
                  <Input
                    placeholder=";"
                    type="text"
                    value={importDetailsNode?.fileName || ''}
                    autoFocus={true}
                    readOnly
                    disabled
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Input
                    placeholder=";"
                    type="text"
                    value={importDetailsNode?.status || ''}
                    autoFocus={true}
                    readOnly
                    disabled
                  />
                </FormControl>
              </FormItem>
            </div>

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

            <div>
              <FormField
                control={form.control}
                name="timestampMapping"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timestamp Mapping</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="h-40"
                        disabled={loading}
                      />
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
                      <Textarea
                        {...field}
                        className="h-72"
                        disabled={loading}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-4 space-x-2">
              <Button
                type="submit"
                disabled={
                  !['file_uploaded', 'failed'].includes(
                    importDetailsNode?.status as string,
                  )
                }
              >
                Save
              </Button>

              <Button
                type="button"
                disabled={
                  !['file_uploaded', 'failed'].includes(
                    importDetailsNode?.status as string,
                  )
                }
                variant={'destructive'}
                onClick={() => runImport()}
              >
                Run Import
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default ImportDetails
