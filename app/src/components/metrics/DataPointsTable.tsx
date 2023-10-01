import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/Table'
import { Button } from '../ui/Button'
import { graphql } from 'relay-runtime'
import { useMutation } from 'react-relay'
import { useToast } from '~/lib/hooks/use-toast'
import { DataPointsTable_Delete_Mutation } from './__generated__/DataPointsTable_Delete_Mutation.graphql'

interface Props {
  onChange?: () => void
  metricId: string
  dataPoints: {
    time: string
    value: number
  }[]
}

const DeleteDataPointMutation = graphql`
  mutation DataPointsTable_Delete_Mutation($filter: MetricsDataPointsFilter!) {
    deleteFromMetricsDataPointsCollection(filter: $filter) {
      affectedCount
    }
  }
`

const DataPointsTable = ({ dataPoints, onChange, metricId }: Props) => {
  const [deleteDataPointMutation] =
    useMutation<DataPointsTable_Delete_Mutation>(DeleteDataPointMutation)
  const { toast } = useToast()

  const deleteDataPoint = async (dataPoint: { time: string }) => {
    const confirmed = confirm(
      'Are you sure you want to delete this data point?',
    )
    if (!confirmed) {
      return
    }

    await deleteDataPointMutation({
      variables: {
        filter: {
          metricId: {
            eq: metricId,
          },
          time: {
            eq: dataPoint.time,
          },
        },
      },
    })

    onChange?.()

    toast({
      title: 'Successfully deleted data point',
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Timestamp</TableHead>
          <TableHead>Value</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataPoints.length === 0 && (
          <TableRow>
            <TableCell colSpan={3}>No data yet</TableCell>
          </TableRow>
        )}
        {dataPoints.map((dataPoint) => (
          <TableRow key={dataPoint.time}>
            <TableCell className="font-medium">
              {format(new Date(dataPoint.time), 'yyyy-MM-dd HH:mm:ss')}
            </TableCell>
            <TableCell>{dataPoint.value}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteDataPoint(dataPoint)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DataPointsTable
