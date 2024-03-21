import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/Table'

export const MetricCardTable = ({
  dataPoints,
}: {
  dataPoints: { time: string; value: number }[]
}) => {
  if (dataPoints.length === 0) {
    return null
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataPoints.map((point) => (
          <TableRow key={point.time}>
            <TableCell className="font-medium">
              {format(new Date(point.time), 'yyyy-MM-dd')}
            </TableCell>
            <TableCell className="text-right">{point.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
