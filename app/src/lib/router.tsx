import { Route, Router } from '@tanstack/react-router'
import accountRoute from '~/components/routes/accounts/account-route'
import appLayoutRoute from '~/components/routes/app-layout-route'
import authLayoutRoute from '~/components/routes/auth-layout-route'
import indexRoute from '~/components/routes/index-route'
import metricsDetailsRoute from '~/components/routes/metrics/metrics-details-route'
import metricsLayoutRoute from '~/components/routes/metrics/metrics-layout-route'
import rootRoute from '~/components/routes/root-route'
import signInRoute from '~/components/routes/sign-in-route'

// dummy routes used for route masking
const newMetricDummyRoute = new Route({
  getParentRoute: () => metricsLayoutRoute,
  path: '/metrics/new',
})

const newMetricDataPointDummyRoute = new Route({
  getParentRoute: () => metricsDetailsRoute,
  path: 'data-points/new',
})

const routeTree = rootRoute.addChildren([
  authLayoutRoute.addChildren([signInRoute]),
  appLayoutRoute.addChildren([
    accountRoute,
    metricsLayoutRoute.addChildren([indexRoute, newMetricDummyRoute]),
    metricsDetailsRoute.addChildren([newMetricDataPointDummyRoute]),
  ]),
])

const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router
