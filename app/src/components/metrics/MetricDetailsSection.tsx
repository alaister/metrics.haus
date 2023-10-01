import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { LineChart } from './LineChart'
import { MetricDetailsSection_metrics$key } from './__generated__/MetricDetailsSection_metrics.graphql'
import GrowthBadge from './GrowthBadge'

const MetricDetailsSectionFragment = graphql`
  fragment MetricDetailsSection_metrics on Metrics {
    unitShort
    dataPoints: metricsDataPointsCollection {
      totalCount
      edges {
        node {
          time
          value
        }
      }
    }
    ...LineChart_metrics
  }
`

export interface MetricDetailsProps {
  metric: MetricDetailsSection_metrics$key
}

const MetricDetailsSection = ({ metric }: MetricDetailsProps) => {
  const data = useFragment(MetricDetailsSectionFragment, metric)

  const dataPoints = data.dataPoints?.edges.map((edge) => edge.node) || []

  const lastDataPoint = dataPoints[dataPoints.length - 1]

  return (
    <div className="space-y-8">
      {dataPoints.length > 0 && (
        <div className="flex gap-x-4">
          <span className="text-2xl font-bold">
            {data.unitShort || '-'}
            {lastDataPoint?.value || '-'}
          </span>
          <GrowthBadge dataPoints={dataPoints} />
        </div>
      )}

      <div className="w-full h-[250px] md:h-[500px]">
        <LineChart dataPoints={data} containerClassName="h-full" />
      </div>
    </div>
  )
}

export default MetricDetailsSection
