import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import { AlertCircle, Plus } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import supabase from '~/lib/supabase'
import SkeletonList from '../loading/SkeletonList'
import MetricCard, { MetricCardSkeleton } from '../metrics/MetricCard'
import { Alert, AlertDescription, AlertTitle } from '../ui/Alert'
import { Button } from '../ui/Button'

const Metrics = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: metrics,
    error,
  } = useQuery(supabase.from('metrics').select('id,name', { count: 'exact' }))

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
          {isLoading && (
            <SkeletonList count={3} skeleton={MetricCardSkeleton} />
          )}

          {isError && (
            <Alert variant="destructive" className="col-span-3">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Something went wrong</AlertTitle>
              <AlertDescription>{error?.message}</AlertDescription>
            </Alert>
          )}

          {isSuccess &&
            metrics?.length > 0 &&
            metrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
        </div>
      </div>

      {/* Outlet for dialogs */}
      <Outlet />
    </>
  )
}

export default Metrics
