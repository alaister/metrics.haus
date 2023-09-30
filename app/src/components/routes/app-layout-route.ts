import { Route, redirect } from '@tanstack/react-router'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import AppLayout from '../layout/AppLayout'
import rootRoute from './root-route'

const appLayoutRoute = new Route({
  getParentRoute: () => rootRoute,
  id: 'app-layout',
  beforeLoad: async () => {
    const { error } = await supabase.auth.initialize()
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: error.message,
      })
      throw redirect({ to: '/sign-in' })
    }

    const {
      data: { session },
    } = await supabase.auth.getSession()
    if (!session) {
      throw redirect({ to: '/sign-in', replace: true })
    }
  },
  component: AppLayout,
})

export default appLayoutRoute
