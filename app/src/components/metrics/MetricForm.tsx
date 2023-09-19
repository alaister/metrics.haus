import { zodResolver } from '@hookform/resolvers/zod'
import { useInsertMutation } from '@supabase-cache-helpers/postgrest-react-query'
import { Save } from 'lucide-react'
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
import { useToast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'

const formSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
})

const MetricForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  const { mutateAsync: insert } = useInsertMutation(
    supabase.from('metrics'),
    ['id'],
    'name',
  )

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await insert({
      name: values.name,
    })
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: error.message,
      })
      return
    }

    toast({
      title: 'Metric created successfully',
    })

    form.reset({ name: '' })
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