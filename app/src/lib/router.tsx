import { lazy } from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import { toast } from './hooks/use-toast'
import supabase from './supabase'

const AuthLayout = lazy(() => import('../components/layout/AuthLayout'))
const DialogLayout = lazy(() => import('../components/layout/DialogLayout'))
const ErrorPage = lazy(() => import('../components/routes/ErrorPage'))
const Index = lazy(() => import('../components/routes/Index'))
const Metrics = lazy(() => import('../components/routes/Metrics'))
const NewMetric = lazy(() => import('../components/routes/NewMetric'))
const RootLayout = lazy(() => import('../components/layout/RootLayout'))
const SignIn = lazy(() => import('../components/routes/SignIn'))

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
      console.log('session:', session)
      if (!session) {
        return redirect('/sign-in')
      }

      return null
    },
    children: [
      { index: true, element: <Index /> },
      {
        path: 'metrics',
        element: <Metrics />,
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
