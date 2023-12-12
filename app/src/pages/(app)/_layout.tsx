import { Outlet } from 'react-router-dom'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import { Navigate } from '~/lib/router'
import { useAppSelector } from '~/stores'

const RootLayout = () => {
  const { user, hasLoaded } = useAppSelector((state) => state.auth)
  if (hasLoaded && !user) {
    return <Navigate to="/sign-in" />
  }

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

export default RootLayout
