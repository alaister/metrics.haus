import { Plus } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'
import IntervalPicker from '~/components/common/IntervalPicker'
import { Button } from '~/components/ui/Button'
import { useModals } from '~/lib/router'

const MetricsLayout = () => {
  const location = useLocation()
  const modals = useModals()

  function openNewMetricModal() {
    modals.open('/metrics/new')
  }

  return (
    <div className="flex flex-col gap-8">
      {location.pathname === '/' && (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold leading-none tracking-tight">
              Metrics
            </h1>

            <div className="flex gap-x-4">
              <Button variant="outline" onClick={openNewMetricModal}>
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </Button>

              <IntervalPicker />
            </div>
          </div>

          <hr />
        </>
      )}

      <Outlet />
    </div>
  )
}

export default MetricsLayout
