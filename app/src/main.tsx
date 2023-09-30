import { RouterProvider } from '@tanstack/react-router'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RelayEnvironmentProvider } from 'react-relay'
import { Toaster } from './components/ui/Toaster'
import environment from './lib/relay'
import router from './lib/router'
import { store } from './stores'

import './index.css'

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RelayEnvironmentProvider environment={environment}>
        <RouterProvider router={router} />
        <Suspense>
          <TanStackRouterDevtools router={router} initialIsOpen={false} />
        </Suspense>
        <Toaster />
      </RelayEnvironmentProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
