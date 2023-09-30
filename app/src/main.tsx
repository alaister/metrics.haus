import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RelayEnvironmentProvider } from 'react-relay'
import { Toaster } from './components/ui/Toaster'
import environment from './lib/relay'
import router from './lib/router'
import { store } from './stores'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RelayEnvironmentProvider environment={environment}>
        <RouterProvider router={router} />
        <TanStackRouterDevtools router={router} initialIsOpen={false} />
        <Toaster />
      </RelayEnvironmentProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
