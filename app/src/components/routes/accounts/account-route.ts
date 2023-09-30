import { Route, lazyRouteComponent } from '@tanstack/react-router'
import appLayoutRoute from '../app-layout-route'

const accountRoute = new Route({
  getParentRoute: () => appLayoutRoute,
  path: '/account',
}).update({
  component: lazyRouteComponent(() => import('./Account')),
})

export default accountRoute
