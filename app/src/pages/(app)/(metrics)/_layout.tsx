import { Plus } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import IntervalPicker from '~/components/common/IntervalPicker'
import { Button } from '~/components/ui/Button'
import { useModals } from '~/lib/router'
import { FavouriteMetricsProvider } from '~/lib/favouriteMetricsContext'
import { cn } from '~/lib/utils'

const MetricsLayout = () => {
  const location = useLocation()
  const modals = useModals()

  function openNewMetricModal() {
    modals.open('/metrics/new')
  }

  return (
    <FavouriteMetricsProvider>
      <div className="flex flex-col gap-8">
        {(location.pathname === '/' || location.pathname === '/favourite') && (
          <>
            <div className="flex justify-between items-center border-b">
              <div className="flex flex-row gap-6">
                <Link
                  className={cn(
                    'text-2xl font-semibold leading-none tracking-tight pb-4 pt-2',
                    location.pathname === '/' && 'border-b-8 border-primary',
                  )}
                  to="/"
                >
                  All metrics
                </Link>
                <Link
                  className={cn(
                    'text-2xl font-semibold leading-none tracking-tight pb-4 pt-2',
                    location.pathname === '/favourite' &&
                      'border-b-8 border-primary',
                  )}
                  to="/favourite"
                >
                  Favourite metrics
                </Link>
              </div>

              <div className="flex gap-x-4 pb-4">
                <Button variant="outline" onClick={openNewMetricModal}>
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </Button>

                <IntervalPicker />
              </div>
            </div>
          </>
        )}

        <Outlet />
      </div>
    </FavouriteMetricsProvider>
  )
}

export default MetricsLayout
