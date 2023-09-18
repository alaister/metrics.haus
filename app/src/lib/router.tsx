import { createBrowserRouter } from 'react-router-dom'
import Index from '~/components/routes/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/other',
    element: <div>Other example page</div>,
  },
])

export default router
