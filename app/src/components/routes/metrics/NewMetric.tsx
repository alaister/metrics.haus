import { useNavigate } from '@tanstack/react-router'
import MetricForm from '~/components/metrics/MetricForm'

const NewMetric = () => {
  const navigate = useNavigate()

  return (
    <div>
      <MetricForm
        onSuccess={() => {
          navigate({
            to: '/',
          })
        }}
      />
    </div>
  )
}

export default NewMetric
