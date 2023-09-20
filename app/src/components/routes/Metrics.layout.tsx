import { Plus } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from '../ui/Button'

const MetricsLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Metrics
        </h1>

        <Button variant="outline" asChild>
          <Link to="metrics/new">
            <Plus className="w-4 h-4" />
            <span>New Metric</span>
          </Link>
        </Button>
      </div>

      <hr />

      <Outlet />
    </div>
  )
}

export default MetricsLayout
