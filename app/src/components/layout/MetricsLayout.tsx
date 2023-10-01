import { Link, Outlet } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { Button } from '../ui/Button'
import IntervalPicker from '../common/IntervalPicker'

const MetricsLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Metrics
        </h1>

        <div className="flex gap-x-4">
          <Button variant="outline" asChild>
            <Link
              search={{ showNewMetricModal: true }}
              mask={{ to: '/metrics/new' }}
            >
              <Plus className="w-4 h-4" />
              <span>Add</span>
            </Link>
          </Button>

          <IntervalPicker />
        </div>
      </div>

      <hr />

      <Outlet />
    </div>
  )
}

export default MetricsLayout
