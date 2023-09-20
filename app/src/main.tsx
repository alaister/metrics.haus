import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RelayEnvironmentProvider } from 'react-relay'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './components/ui/ThemeProvider'
import { Toaster } from './components/ui/Toaster'
import environment from './lib/relay'
import router from './lib/router'
import { store } from './stores'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RelayEnvironmentProvider environment={environment}>
        <ThemeProvider defaultTheme="system" storageKey="metrics-haus.theme">
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </RelayEnvironmentProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
