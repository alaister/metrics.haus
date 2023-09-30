import { Outlet } from '@tanstack/react-router'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'

const AppLayout = () => {
  // const navigate = useNavigate()
  // const location = useLocation()

  // useEffect(() => {
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     if (!session) {
  //       navigate('/sign-in')
  //     }
  //   })

  //   return () => {
  //     subscription.unsubscribe()
  //   }
  // }, [navigate])

  // useEffect(() => {
  //   emitUserEvent('view_page', location.pathname)
  // }, [location])

  return (
    <div className="flex flex-col relative items-stretch min-h-screen-dvh font-sans">
      <Header />

      <main className="flex-1 container overflow-x-hidden pt-8 pb-16 sm:pb-20 lg:pb-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
