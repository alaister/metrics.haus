import { Route, redirect } from '@tanstack/react-router'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import AuthLayout from '../layout/AuthLayout'
import rootRoute from './root-route'

const authLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'sign-in-layout',
  beforeLoad: async () => {
    const { error } = await supabase.auth.initialize()
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: error.message,
      })
      return
    }

    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (session) {
      throw redirect({ to: '/', replace: true })
    }
  },
  component: AuthLayout,
})

export default authLayoutRoute
