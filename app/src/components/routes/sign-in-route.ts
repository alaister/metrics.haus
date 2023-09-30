import { Route, lazyRouteComponent, redirect } from '@tanstack/react-router'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import authLayoutRoute from './auth-layout-route'

const signInRoute = new Route({
  getParentRoute: () => authLayoutRoute,
  path: '/sign-in',
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
      throw redirect({ to: '/' })
    }
  },
}).update({
  component: lazyRouteComponent(() => import('./SignIn')),
})

export default signInRoute
