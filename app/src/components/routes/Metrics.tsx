import { Plus } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import MetricsCard from '../metrics/MetricsCard'
import { Button } from '../ui/Button'

const Metrics = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight">
            Metrics
          </h1>

          <Button variant="outline" asChild>
            <Link to="new">
              <Plus className="w-4 h-4" />
              <span>New Metric</span>
            </Link>
          </Button>
        </div>

        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <MetricsCard key={i} />
          ))}
        </div>
      </div>

      {/* Outlet for dialogs */}
      <Outlet />
    </>
  )
}

export default Metrics
