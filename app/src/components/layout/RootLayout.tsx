import { Suspense, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import supabase from '~/lib/supabase'

const RootLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/sign-in')
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [navigate])

  useEffect(() => {
    supabase
      .from('user_events')
      .insert({
        event: 'page_view',
        value: location.pathname,
      })
      .then((resp) => {
        const { error } = resp
        if (error) {
          console.error(error)
        }
      })
  }, [location])

  return (
    <div className="flex flex-col relative items-stretch min-h-screen-dvh font-sans">
      <Header />

      <main className="flex-1 container overflow-x-hidden pt-8 pb-16 sm:pb-20 lg:pb-24">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
