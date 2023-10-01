import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { LineChart } from './LineChart'
import { MetricDetailsSection_metrics$key } from './__generated__/MetricDetailsSection_metrics.graphql'
import GrowthBadge from './GrowthBadge'
import { Button } from '../ui/Button'
import { MetricDetailsSection_Archive_Mutation } from './__generated__/MetricDetailsSection_Archive_Mutation.graphql'
import { useToast } from '~/lib/hooks/use-toast'
import { useNavigate } from '@tanstack/react-router'

const MetricDetailsSectionFragment = graphql`
  fragment MetricDetailsSection_metrics on Metrics {
    id
    unitShort
    dataPoints: metricsDataPointsCollection {
      totalCount
      edges {
        node {
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
  const data = useFragment(MetricDetailsSectionFragment, metric)
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

      <div className="w-full h-[250px] md:h-[500px]">
        <LineChart dataPoints={data} containerClassName="h-full" />
      </div>

      <div>
        <Button variant={'destructive'} onClick={() => archive()}>
          Archive
        </Button>
      </div>
    </div>
  )
}

export default MetricDetailsSection
