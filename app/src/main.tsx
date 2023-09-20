import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RelayEnvironmentProvider } from 'react-relay'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/Toaster'
import environment from './lib/relay'
import router from './lib/router'

import './index.css'
import { store } from './stores'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RelayEnvironmentProvider environment={environment}>
        <RouterProvider router={router} />
        <Toaster />
      </RelayEnvironmentProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
