import { loadQuery } from 'react-relay'
import { createBrowserRouter, redirect } from 'react-router-dom'
import AuthLayout from '~/components/layout/AuthLayout'
import DialogLayout from '~/components/layout/DialogLayout'
import RootLayout from '~/components/layout/RootLayout'
import QueryPageShell from '~/components/loading/QueryPageShell'
import ErrorPage from '~/components/routes/ErrorPage'
import Metrics from '~/components/routes/Metrics'
import MetricsLayout from '~/components/routes/Metrics.layout'
import NewMetric from '~/components/routes/NewMetric'
import SignIn from '~/components/routes/SignIn'
import * as MetricsData from '../components/routes/Metrics.data'
import * as MetricDetailsData from '../components/routes/MetricDetails.data'
import { toast } from './hooks/use-toast'
import environment from './relay'
import supabase from './supabase'
import MetricDetails from '~/components/routes/MetricDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const { error } = await supabase.auth.initialize()
      if (error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: error.message,
        })
        return redirect('/sign-in')
      }

      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        return redirect('/sign-in')
      }

      return null
    },
    children: [
      {
        element: <MetricsLayout />,
        children: [
          {
            path: '/',
            element: (
              <QueryPageShell
                pageComponent={Metrics}
                fallback={MetricsData.fallback}
                query={MetricsData.query}
              />
            ),
            loader: async () => {
              return {
                initialQueryRef: loadQuery(environment, MetricsData.query, {}),
              }
            },
          },
        ],
      },

      {
        path: 'metrics',
        children: [
          {
            element: <DialogLayout />,
            children: [
              {
                path: 'new',
                element: <NewMetric />,
              },
            ],
          },
          {
            path: ':metricId',
            element: (
              <QueryPageShell
                pageComponent={MetricDetails}
                fallback={MetricDetailsData.fallback}
                query={MetricDetailsData.query}
              />
            ),
            loader: async ({ params }) => {
              return {
                initialQueryRef: loadQuery(
                  environment,
                  MetricDetailsData.query,
                  { nodeId: params.metricId },
                ),
              }
            },
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const { error } = await supabase.auth.initialize()
      if (error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: error.message,
        })
        return
      }

      const {
        data: { session },
      } = await supabase.auth.getSession()
      console.log('session13:', session)
      if (session) {
        return redirect('/')
      }

      return null
    },
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
])

export default router
