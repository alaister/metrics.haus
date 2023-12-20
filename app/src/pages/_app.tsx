import { ApolloProvider } from '@apollo/client'
import { Modals } from '@generouted/react-router/lazy'
import { Provider as ReduxProvider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Toaster } from '~/components/ui/Toaster'
import apolloClient from '~/lib/apollo'
import { store } from '~/stores'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <Outlet />
        <Modals />
        <Toaster />
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default App
