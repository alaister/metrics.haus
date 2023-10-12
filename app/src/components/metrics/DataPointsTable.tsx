import { format } from 'date-fns'
import { useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'
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
import { DataPointsTable_Delete_Mutation } from './__generated__/DataPointsTable_Delete_Mutation.graphql'
import { toGlobalId } from '~/lib/graphql'

export interface DataPointsTableProps {
  metricId: string
  dataPoints: {
    time: string
    value: number
  }[]
}

const DeleteDataPointMutation = graphql`
  mutation DataPointsTable_Delete_Mutation(
    $filter: MetricsDataPointsFilter!
    $connections: [ID!]!
  ) {
    deleteFromMetricsDataPointsCollection(filter: $filter) {
      affectedCount
      records {
        nodeId @deleteEdge(connections: $connections)
      }
    }
  }
`

const DataPointsTable = ({ dataPoints, metricId }: DataPointsTableProps) => {
  const [deleteDataPointMutation] =
    useMutation<DataPointsTable_Delete_Mutation>(DeleteDataPointMutation)
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
        connections: [
          ConnectionHandler.getConnectionID(
            toGlobalId(metricId, 'metrics'),
            'MetricDetailsSection_metrics_dataPoints',
          ),
          ConnectionHandler.getConnectionID(
            toGlobalId(metricId, 'metrics'),
            'MetricDataPoints_metrics_metricsDataPointsCollection',
          ),
          ConnectionHandler.getConnectionID(
            toGlobalId(metricId, 'metrics'),
            'MetricCard_metrics_dataPoints',
          ),
        ],
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
