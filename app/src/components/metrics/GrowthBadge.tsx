import { useMemo } from 'react'
import { Badge } from '../ui/Badge'
import { ArrowDown, ArrowUp } from 'lucide-react'

interface Props {
  dataPoints: { value: number }[]
}

const GrowthBadge = ({ dataPoints }: Props) => {
  const firstDataPoint = dataPoints[0]
  const lastDataPoint = dataPoints[dataPoints.length - 1]

  const percentage = useMemo(() => {
    if (!firstDataPoint || !lastDataPoint) return 0

    const percentage =
      ((lastDataPoint.value - firstDataPoint.value) / firstDataPoint.value) *
      100

    return percentage.toLocaleString()
  }, [firstDataPoint, lastDataPoint])

  const hasNoDataPoints = dataPoints?.length === 0

  return (
    <div>
      {dataPoints.length >= 2 && firstDataPoint.value > lastDataPoint.value ? (
        <Badge variant={'destructive'}>
          <ArrowDown className="h-3 w-4" />
          {percentage}%
        </Badge>
      ) : hasNoDataPoints || firstDataPoint.value === lastDataPoint.value ? (
        <Badge variant={'outline'}>-</Badge>
      ) : (
        <Badge variant={'secondary'}>
          <ArrowUp className="h-3 w-4" />
          {percentage}%
        </Badge>
      )}
    </div>
  )
}

export default GrowthBadge
