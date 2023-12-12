import { useQuery } from '@apollo/client'
import { Plus } from 'lucide-react'
import IntervalPicker from '~/components/common/IntervalPicker'
import MetricDetailsSection from '~/components/metrics/MetricDetailsSection'
import { Button } from '~/components/ui/Button'
import { graphql } from '~/lib/gql'
import { toGlobalId } from '~/lib/graphql'
import { useModals, useParams } from '~/lib/router'

export const MetricDetailsQuery = graphql(/* GraphQL */ `
  query MetricDetailsQuery($nodeId: ID!) {
    node(nodeId: $nodeId) {
      nodeId
      ... on Metrics {
        id
        name
        icon
        unitShort
        description
        ...MetricDetailsSectionItem
      }
    }
  }
`)

const MetricDetailsPage = () => {
  const { id: metricId } = useParams('/metrics/:id')
  const modals = useModals()

  const { data } = useQuery(MetricDetailsQuery, {
    variables: {
      nodeId: toGlobalId(metricId, 'metrics'),
    },
  })

  function openNewDataPointModal() {
    modals.open('/metrics/[id]/data-points/new')
  }

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold leading-none tracking-tight">
              {data?.node?.__typename === 'Metrics'
                ? data.node.name
                : 'Unknown Metric'}
            </h2>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={openNewDataPointModal}>
              <Plus className="w-4 h-4" />
              <span>Data Point</span>
            </Button>

            <IntervalPicker />
          </div>
        </div>

        <hr />
      </div>

      {data?.node ? (
        <div className="mt-5">
          <MetricDetailsSection metricNodeId={data.node.nodeId} />
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </div>
  )
}

export default MetricDetailsPage
