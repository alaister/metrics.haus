import { useFragment } from '@apollo/client'
import { memo } from 'react'
import { graphql } from '~/lib/gql'
import { Link } from '~/lib/router'
import GrowthBadge from './GrowthBadge'
import { LineChart } from './LineChart'
import { MetricCardTable } from './MetricCardTable'
import { useAppSelector } from '~/stores'
import { LucideHeart } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useFavouriteMetrics } from '~/lib/favouriteMetricsContext'

const MetricCardFragment = graphql(/* GraphQL */ `
  fragment MetricCardItem on Metrics {
    id
    name
    icon
    unitShort
    createdAt
    metricsDataPointsCollection(orderBy: [{ time: DescNullsLast }]) {
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
  const { ids, setIds } = useFavouriteMetrics()
  const { data, complete } = useFragment({
    fragment: MetricCardFragment,
    fragmentName: 'MetricCardItem',
    from: {
      nodeId: metricNodeId,
    },
  })
  const interval = useAppSelector((state) => state.app.metricsInterval)

  if (!complete) {
    return null
  }

  const dataPoints =
    data.metricsDataPointsCollection?.edges.map((edge) => edge.node) ?? []
  const hasNoDataPoints = data.metricsDataPointsCollection?.totalCount === 0

  const firstDataPoint = dataPoints[0]
  const filteredDataPoints = dataPoints.filter((dp) => {
    if (interval.from && new Date(dp.time) < new Date(interval.from)) {
      return false
    }
    if (interval.to && new Date(dp.time) > new Date(interval.to)) {
      return false
    }
    return true
  })

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center">
          <Link to="/metrics/:id" params={{ id: data.id }}>
            {data.name}
          </Link>
          <GrowthBadge dataPoints={filteredDataPoints} />
        </CardTitle>
        <CardDescription className="flex flex-row justify-between items-center">
          <span className="text-2xl font-bold">
            {data.unitShort || ''}
            {firstDataPoint?.value?.toLocaleString() || '-'}
          </span>
          <LucideHeart
            color="red"
            fill={ids.includes(data.id) ? '#F00' : '#FFF'}
            onClick={() => {
              if (ids.includes(data.id)) {
                setIds(ids.filter((id) => id !== data.id))
              } else {
                const newIds = [...ids, data.id]
                setIds(newIds)
              }
            }}
          />
        </CardDescription>
      </CardHeader>

      <div className="overflow-hidden relative">
        {hasNoDataPoints && (
          <div className="z-20 bg-white/20 flex items-center justify-center -inset-0 w-full h-full absolute">
            <span className="text-sm font-semibold">No Data Yet</span>
          </div>
        )}

        <LineChart
          containerClassName="w-[110%] h-36 -ml-6"
          preview={true}
          dataPoints={filteredDataPoints}
        />
      </div>
      <MetricCardTable dataPoints={filteredDataPoints.slice(0, 6)} />
    </Card>
  )
})

export const MetricCardSkeleton = () => {
  return <div className="rounded-lg border shadow">loading...</div>
}

export default MetricCard
