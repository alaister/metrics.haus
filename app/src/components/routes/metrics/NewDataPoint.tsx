import MetricDataPointForm from '~/components/metrics/MetricDataPointForm'

export interface NewMetricDataPointProps {
  metricId: string
}

const NewMetricDataPoint = ({ metricId }: NewMetricDataPointProps) => {
  return (
    <div>
      <MetricDataPointForm metricId={metricId!} />
    </div>
  )
}

export default NewMetricDataPoint
