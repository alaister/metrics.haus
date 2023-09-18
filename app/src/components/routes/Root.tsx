import { Outlet } from 'react-router-dom'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'

const Root = () => {
  return (
    <div className="flex flex-col relative items-stretch bg-gray-50 min-h-screen-dvh font-sans">
      <Header />

      <main className="flex-1 container bg-white shadow-lg overflow-x-hidden pb-16 sm:pb-20 lg:pb-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Root
