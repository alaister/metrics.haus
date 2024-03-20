import { useFragment } from '@apollo/client'
import { memo } from 'react'
import { graphql } from '~/lib/gql'
import { Link } from '~/lib/router'
import GrowthBadge from './GrowthBadge'
import { LineChart } from './LineChart'

const MetricCardFragment = graphql(/* GraphQL */ `
  fragment MetricCardItem on Metrics {
    id
    name
    icon
    unitShort
    createdAt
    metricsDataPointsCollection(orderBy: [{ time: AscNullsLast }]) {
      totalCount
      edges {
        node {
          nodeId
          time
          value
        }
      }
    }
  }
`)

export interface MetricCardProps {
  metricNodeId: string
}

const MetricCard = memo(function MetricCard({ metricNodeId }: MetricCardProps) {
  const { data, complete } = useFragment({
    fragment: MetricCardFragment,
    fragmentName: 'MetricCardItem',
    from: {
      nodeId: metricNodeId,
    },
  })

  if (!complete) {
    return null
  }

  const dataPoints =
    data.metricsDataPointsCollection?.edges.map((edge) => edge.node) ?? []
  const hasNoDataPoints = data.metricsDataPointsCollection?.totalCount === 0

  const lastDataPoint = dataPoints[dataPoints.length - 1]

  return (
    <Link to="/metrics/:id" params={{ id: data.id }}>
      <div className="rounded-lg border shadow pt-4 cursor-pointer">
        <div className="px-4 pb-4 border-b">
          <div className="flex justify-between">
            <label className="tracking-tight text-sm font-medium">
              {data.name}
            </label>
            <GrowthBadge dataPoints={dataPoints} />
          </div>

          <div>
            <div>
              <span className="text-2xl font-bold">
                {data.unitShort || ''}
                {lastDataPoint?.value?.toLocaleString() || '-'}
              </span>
            </div>
          </div>
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
            dataPoints={dataPoints}
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
