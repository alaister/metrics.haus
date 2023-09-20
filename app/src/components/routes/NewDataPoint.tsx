import { useParams } from 'react-router-dom'
import MetricDataPointForm from '../metrics/MetricDataPointForm'

const NewMetricDataPoint = () => {
  const { metricId } = useParams()

  return (
    <div>
      <MetricDataPointForm
        metricId={metricId!}
        onSuccess={() => {
          // dont navigate to easily add another data point
          // navigate('/')
        }}
      />
    </div>
  )
}

export default NewMetricDataPoint
