import { Link, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import Footer from '~/components/layout/Footer'

const AuthLayout = () => {
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
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default AuthLayout
