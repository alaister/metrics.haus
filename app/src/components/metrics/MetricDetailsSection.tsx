import { useNavigate } from '@tanstack/react-router'
import { useMutation, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useToast } from '~/lib/hooks/use-toast'
import { Button } from '../ui/Button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs'
import DataPointsTable from './DataPointsTable'
import GrowthBadge from './GrowthBadge'
import { LineChart } from './LineChart'
import { MetricDetailsSection_Archive_Mutation } from './__generated__/MetricDetailsSection_Archive_Mutation.graphql'
import { MetricDetailsSection_metrics$key } from './__generated__/MetricDetailsSection_metrics.graphql'

const MetricDetailsSectionFragment = graphql`
  fragment MetricDetailsSection_metrics on Metrics
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 100 }
  )
  @refetchable(queryName: "MetricDetailsSectionPagination_Query") {
    id
    unitShort
    dataPoints: metricsDataPointsCollection(
      after: $cursor
      first: $count
      orderBy: [{ time: AscNullsLast }]
    ) @connection(key: "MetricDetailsSection_metrics_dataPoints", filters: []) {
      totalCount
      edges {
        node {
          nodeId
          time
          value
        }
      }
    }
    ...LineChart_metrics
  }
`

const MetricArchiveMutation = graphql`
  mutation MetricDetailsSection_Archive_Mutation(
    $input: MetricsUpdateInput!
    $filter: MetricsFilter
  ) {
    updateMetricsCollection(set: $input, filter: $filter) {
      affectedCount
    }
  }
`

export interface MetricDetailsProps {
  metric: MetricDetailsSection_metrics$key
}

const MetricDetailsSection = ({ metric }: MetricDetailsProps) => {
  const { data } = usePaginationFragment(MetricDetailsSectionFragment, metric)
  const [archiveMutation] = useMutation<MetricDetailsSection_Archive_Mutation>(
    MetricArchiveMutation,
  )
  const { toast } = useToast()
  const navigate = useNavigate()

  const dataPoints = data.dataPoints?.edges.map((edge) => edge.node) || []

  const lastDataPoint = dataPoints[dataPoints.length - 1]

  const archive = async () => {
    await archiveMutation({
      variables: {
        input: {
          archived: true,
        },

        filter: {
          id: {
            eq: data.id,
          },
        },
      },
    })

    toast({
      variant: 'default',
      title: 'Successfully archived metric',
    })

    navigate({
      to: '/',
      replace: true,
    })
  }

  return (
    <div className="space-y-8">
      {dataPoints.length > 0 && (
        <div className="flex gap-x-4">
          <span className="text-2xl font-bold">
            {data.unitShort || '-'}
            {lastDataPoint?.value || '-'}
          </span>
          <GrowthBadge dataPoints={dataPoints} />
        </div>
      )}

      <Tabs defaultValue="graph">
        <TabsList>
          <TabsTrigger value="graph">Graph</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
        </TabsList>
        <TabsContent value="graph">
          <div className="w-full h-[250px] md:h-[500px]">
            <LineChart dataPoints={data} containerClassName="h-full" />
          </div>

          <div>
            <Button variant={'destructive'} onClick={() => archive()}>
              Archive
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="table">
          <DataPointsTable dataPoints={dataPoints} metricId={data.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default MetricDetailsSection
