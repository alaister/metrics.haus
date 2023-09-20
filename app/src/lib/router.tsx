import { createBrowserRouter } from 'react-router-dom'
import Dash from '~/components/routes/Dash'
import Index from '~/components/routes/Index'
import Root from '~/components/routes/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: '/dash',
    element: <Root />,
    children: [{ index: true, element: <Dash /> }],
  },
])

export default router
