import { Link } from '@tanstack/react-router'
import { memo } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { LineChart } from './LineChart'
import { MetricCard_metrics$key } from './__generated__/MetricCard_metrics.graphql'

const MetricCardFragment = graphql`
  fragment MetricCard_metrics on Metrics {
    id
    name
    createdAt
    dataPoints: metricsDataPointsCollection {
      totalCount
    }
    ...LineChart_metrics
  }
`

export interface MetricCardProps {
  metric: MetricCard_metrics$key
}

const MetricCard = memo(function MetricCard({ metric }: MetricCardProps) {
  const data = useFragment(MetricCardFragment, metric)

  const hasNoDataPoints = data.dataPoints?.totalCount === 0

  return (
    <Link
      to="/metrics/$metricId"
      params={{ metricId: data.id }}
      preload="intent"
    >
      <div className="rounded-lg border shadow pt-4 cursor-pointer">
        <div className="px-4 pb-4 border-b">
          <label>{data.name}</label>
        </div>
        <div className="overflow-hidden relative">
          {hasNoDataPoints && (
            <div className="z-20 bg-white/20 flex items-center justify-center -inset-0 w-full h-full absolute">
              <span className="text-sm font-semibold">No Data Yet</span>
            </div>
          )}
          <LineChart
            containerClassName="w-[110%] h-36 -ml-6"
            preview={true}
            dataPoints={data}
          />
        </div>
      </div>
    </Link>
  )
})

export const MetricCardSkeleton = () => {
  return <div className="rounded-lg border shadow">loading...</div>
}

export default MetricCard
