import { Outlet } from 'react-router-dom'
import Footer from '~/components/layout/Footer'
import { Link, Navigate } from '~/lib/router'
import { useAppSelector } from '~/stores'

const AuthLayout = () => {
  const { user, hasLoaded } = useAppSelector((state) => state.auth)
  if (hasLoaded && user) {
    return <Navigate to="/sign-in" />
  }

  return (
    <div className="flex flex-col relative items-stretch min-h-screen-dvh font-sans">
      <header className="sticky top-0 border-b bg-white">
        <div className="flex h-16 justify-between items-center px-4">
          <h1 className="font-medium">
            <Link to="/">metrics.haus</Link>
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-xl w-full mx-auto px-8 overflow-x-hidden pt-8 md:pt-16 pb-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AuthLayout
