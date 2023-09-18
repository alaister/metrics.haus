import { createBrowserRouter } from 'react-router-dom'
import Index from '~/components/routes/Index'
import Root from '~/components/routes/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Index /> }],
  },
])

export default router
