import React from 'react'
import ReactDOM from 'react-dom/client'
import { RelayEnvironmentProvider } from 'react-relay'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './components/ui/Toaster'
import environment from './lib/relay'
import router from './lib/router'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <RouterProvider router={router} />
      <Toaster />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
)
