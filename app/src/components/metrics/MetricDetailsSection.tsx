import { useFragment } from 'react-relay'
import { LineChart } from './LineChart'
import { graphql } from 'relay-runtime'
import { MetricDetailsSection_metrics$key } from './__generated__/MetricDetailsSection_metrics.graphql'

const MetricDetailsSectionFragment = graphql`
  fragment MetricDetailsSection_metrics on Metrics {
    dataPoints: metricsDataPointsCollection {
      totalCount
    }
    ...LineChart_metrics
  }
`

export interface MetricDetailsProps {
  metric: MetricDetailsSection_metrics$key
}

const MetricDetailsSection = ({ metric }: MetricDetailsProps) => {
  const data = useFragment(MetricDetailsSectionFragment, metric)

  const hasNoDataPoints = data.dataPoints?.totalCount === 0

  return (
    <div className="w-full h-[250px] md:h-[500px]">
      <LineChart dataPoints={data} containerClassName="h-full" />
    </div>
  )
}

export default MetricDetailsSection
