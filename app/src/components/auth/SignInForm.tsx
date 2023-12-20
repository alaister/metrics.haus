import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/components/ui/Button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/Form'
import { Input } from '~/components/ui/Input'
import { useToast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'

const formSchema = z.object({
  email: z.string().email(),
})

const SignInForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      import.meta.env.MODE === 'development' ||
      import.meta.env.VERCEL_ENV === 'preview'
    ) {
      const { error } = await supabase.auth.signInWithOtp({
        email: values.email,
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
        title: 'Check your email',
        description: 'We sent you a magic link to sign in.',
      })
    } else {
      const { error, data } = await supabase.auth.signInWithSSO({
        domain: values.email.split('@')[1],
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
        title: 'Success',
        description: 'Redirecting...',
      })

      window.location.href = data.url
    }

    form.reset({ email: '' })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  type="email"
                  autoFocus={true}
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormDescription>Use your work email address.</FormDescription>
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
          Sign In
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm
