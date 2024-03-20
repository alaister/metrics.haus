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

const formSchema = z.object({
  columnSeparator: z.string(),
})

const columnMappings = {
  timestamp: {
    columnMapping: {
      type: 'index',
      index: 0,
    },
    timezone: 'Europe/Berlin',
  },
  metricMappings: [
    {
      columnMapping: {
        type: 'name',
        name: 'WADB',
      },
      metricId: '101fc575-2edd-49e6-8016-3a6c97fd57c0',
    },
  ],
}

const ImportDetails = () => {
  const { id } = useParams('/imports/:id')
  const { toast } = useToast()

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
    await supabase
      .from('imports')
      .update({
        mapping: {
          csvOptions: {
            columnSeparator: form.getValues('columnSeparator'),
          },
          ...columnMappings,
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
            value={JSON.stringify(columnMappings, null, 2)}
            readOnly={true}
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
