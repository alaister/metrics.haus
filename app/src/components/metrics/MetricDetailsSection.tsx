import { useFragment, useMutation } from '@apollo/client'
import { useState } from 'react'
import { graphql } from '~/lib/gql'
import { useToast } from '~/lib/hooks/use-toast'
import { useNavigate } from '~/lib/router'
import { Button } from '../ui/Button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs'
import DataPointsTable from './DataPointsTable'
import GrowthBadge from './GrowthBadge'
import { LineChart } from './LineChart'

const MetricDetailsSectionFragment = graphql(/* GraphQL */ `
  fragment MetricDetailsSectionItem on Metrics {
    id
    unitShort
    metricsDataPointsCollection(orderBy: [{ time: DescNullsLast }]) {
      totalCount
      edges {
        node {
          nodeId
          time
          value
        }
      }
    }
  }
`)

const MetricArchiveMutation = graphql(/* GraphQL */ `
  mutation MetricDetailsSectionArchiveMutation($filter: MetricsFilter) {
    updateMetricsCollection(set: { archived: true }, filter: $filter) {
      affectedCount
      records {
        nodeId
      }
    }
  }
`)

export interface MetricDetailsProps {
  metricNodeId: string
}

const MetricDetailsSection = ({ metricNodeId }: MetricDetailsProps) => {
  const { data, complete } = useFragment({
    fragment: MetricDetailsSectionFragment,
    fragmentName: 'MetricDetailsSectionItem',
    from: {
      nodeId: metricNodeId,
    },
  })
  const [archiveMutation, { loading: isArchiving }] = useMutation(
    MetricArchiveMutation,
  )
  const { toast } = useToast()
  const navigate = useNavigate()

  const [tab, setTab] = useState('graph')

  if (!complete) {
    return null
  }

  const dataPoints =
    data.metricsDataPointsCollection?.edges.map((edge) => edge.node) ?? []

  const lastDataPoint = dataPoints[dataPoints.length - 1]

  const archive = () => {
    archiveMutation({
      variables: {
        filter: {
          id: {
            eq: data.id,
          },
        },
      },
      onCompleted() {
        toast({
          variant: 'default',
          title: 'Successfully archived metric',
        })

        navigate('/')
      },
    })
  }

  return (
    <div className="space-y-8">
      {dataPoints.length > 0 && (
        <div className="flex gap-x-4">
          <span className="text-2xl font-bold">
            {data.unitShort || ''}
            {lastDataPoint?.value?.toLocaleString() || '-'}
          </span>
          <GrowthBadge dataPoints={dataPoints} />
        </div>
      )}

      <Tabs defaultValue="graph" value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="graph">Graph</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="graph">
          <div className="w-full h-[250px] md:h-[500px]">
            <LineChart dataPoints={dataPoints} containerClassName="h-full" />
          </div>
        </TabsContent>
        <TabsContent value="table">
          <DataPointsTable dataPoints={dataPoints} metricId={data.id} />
        </TabsContent>
        <TabsContent value="settings">
          <div>
            <Button
              variant="destructive"
              onClick={archive}
              isLoading={isArchiving}
              disabled={isArchiving}
            >
              Archive Metric
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default MetricDetailsSection
