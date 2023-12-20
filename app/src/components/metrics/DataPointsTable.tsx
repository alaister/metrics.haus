import { useMutation } from '@apollo/client'
import { format } from 'date-fns'
import { graphql } from '~/lib/gql'
import { useToast } from '~/lib/hooks/use-toast'
import { Button } from '../ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/Table'

export interface DataPointsTableProps {
  metricId: string
  dataPoints: {
    time: string
    value: number
  }[]
}

const DeleteDataPointMutation = graphql(/* GraphQL */ `
  mutation DataPointsTable_Delete_Mutation($filter: MetricsDataPointsFilter!) {
    deleteFromMetricsDataPointsCollection(filter: $filter) {
      affectedCount
      records {
        nodeId
      }
    }
  }
`)

const DataPointsTable = ({ dataPoints, metricId }: DataPointsTableProps) => {
  const [deleteDataPointMutation] = useMutation(DeleteDataPointMutation)
  const { toast } = useToast()

  const deleteDataPoint = (dataPoint: { time: string }) => {
    const confirmed = confirm(
      'Are you sure you want to delete this data point?',
    )
    if (!confirmed) {
      return
    }

    deleteDataPointMutation({
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
