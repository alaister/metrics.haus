import { useMemo } from 'react'
import { Badge } from '../ui/Badge'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { DataPoint } from './LineChart'

interface Props {
  dataPoints: DataPoint[]
}

const GrowthBadge = ({ dataPoints }: Props) => {
  const sortedDataPoints = useMemo(
    () => dataPoints.sort((a, b) => +new Date(b.time) - +new Date(a.time)),
    [dataPoints],
  )
  const firstDataPoint = sortedDataPoints[0]
  const lastDataPoint = sortedDataPoints[sortedDataPoints.length - 1]

  const percentage = useMemo(() => {
    if (!firstDataPoint || !lastDataPoint) return 0

    const percentage =
      ((firstDataPoint.value - lastDataPoint.value) / lastDataPoint.value) * 100

    return percentage.toLocaleString()
  }, [firstDataPoint, lastDataPoint])

  const hasNoDataPoints = dataPoints?.length === 0

  return (
    <>
      {dataPoints.length >= 2 && lastDataPoint.value > firstDataPoint.value ? (
        <Badge variant={'destructive'}>
          <ArrowDown className="h-3 w-4" />
          {percentage}%
        </Badge>
      ) : hasNoDataPoints || lastDataPoint.value === firstDataPoint.value ? (
        <Badge variant={'outline'}>-</Badge>
      ) : (
        <Badge variant={'secondary'}>
          <ArrowUp className="h-3 w-4" />
          {percentage}%
        </Badge>
      )}
    </>
  )
}

export default GrowthBadge
