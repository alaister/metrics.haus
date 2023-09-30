import { Route } from '@tanstack/react-router'
import MetricsLayout from '~/components/layout/MetricsLayout'
import appLayoutRoute from '../app-layout-route'

const metricsLayoutRoute = new Route({
  getParentRoute: () => appLayoutRoute,
  id: 'metrics-layout',
  component: MetricsLayout,
})

export default metricsLayoutRoute
