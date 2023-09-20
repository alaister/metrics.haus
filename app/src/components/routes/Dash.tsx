import { sleep } from '~/lib/utils'
import { Button } from '../ui/Button'
import { mockMetrics } from '../metrics/mock-data'
import { useQuery } from '@tanstack/react-query'
import { Metric } from '../metrics/typedef'
import { LineChart } from '../metrics/LIneChart'

async function fetchCurrentMetrics() {
  await sleep(1500)
  return mockMetrics
}

const Dash = () => {
  const { data: metrics, isLoading } = useQuery({
    queryKey: ['currentMetrics'],
    queryFn: fetchCurrentMetrics,
  })

  async function triggerAddMetricForm() {
    return sleep(500)
  }

  return (
    <>
      <div className="flex w-full justify-between items-center">
        <h2>Dashboard</h2>
        <Button onClick={triggerAddMetricForm} className="justify-self-end">
          + Add Metric
        </Button>
      </div>
      {isLoading ? 'Loading...' : <ChartsGrid metrics={metrics!} />}
    </>
  )
}

type ChartsGridProps = {
  metrics: Metric[]
}

function ChartsGrid({ metrics }: ChartsGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
      {metrics.map((metric) => (
        <div className="h-80" key={metric.metricId}>
          <LineChart metric={metric} />
        </div>
      ))}
    </div>
  )
}

export default Dash
