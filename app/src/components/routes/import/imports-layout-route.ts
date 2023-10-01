import { Route } from '@tanstack/react-router'
import ImportLayout from '~/components/layout/ImportLayout'
import appLayoutRoute from '../app-layout-route'

const importsLayoutRoute = new Route({
  getParentRoute: () => appLayoutRoute,
  id: 'import-layout',
  component: ImportLayout,
})

export default importsLayoutRoute
