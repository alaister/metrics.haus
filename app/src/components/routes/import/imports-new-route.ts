import { Route, lazyRouteComponent } from '@tanstack/react-router'
import appLayoutRoute from '../app-layout-route'

const importsNewRoute = new Route({
  getParentRoute: () => appLayoutRoute,
  path: '/imports/new',
}).update({
  component: lazyRouteComponent(() => import('./ImportsNew')),
})

export default importsNewRoute
