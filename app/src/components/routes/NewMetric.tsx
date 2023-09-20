import { useNavigate } from 'react-router-dom'
import MetricForm from '../metrics/MetricForm'

const NewMetric = () => {
  const navigate = useNavigate()

  return (
    <div>
      <MetricForm
        onSuccess={() => {
          navigate('/metrics')
        }}
      />
    </div>
  )
}

export default NewMetric
