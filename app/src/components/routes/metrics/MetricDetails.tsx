import { Link, useNavigate } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { usePreloadedQuery } from 'react-relay'
import IntervalPicker from '~/components/common/IntervalPicker'
import MetricDetailsSection from '~/components/metrics/MetricDetailsSection'
import { Button } from '~/components/ui/Button'
import { Dialog, DialogContent } from '~/components/ui/Dialog'
import NewMetricDataPoint from './NewDataPoint'
import metricsDetailsRoute, { query } from './metrics-details-route'

const MetricDetails: (typeof metricsDetailsRoute)['options']['component'] = ({
  useParams,
  useSearch,
  useLoader,
}) => {
  const { metricId } = useParams()
  const { showNewDataPointModal } = useSearch()
  const navigate = useNavigate()

  const { queryRef } = useLoader()
  const data = usePreloadedQuery(query, queryRef)

  return (
    <>
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="tracking-tight text-xl font-medium">
                {data.node?.name}
              </h2>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link
                  search={{ showNewDataPointModal: true }}
                  mask={{
                    to: '/metrics/$metricId/data-points/new',
                    params: { metricId },
                  }}
                >
                  <Plus className="w-4 h-4" />
                  <span>Data Point</span>
                </Link>
              </Button>

              <IntervalPicker />
            </div>
          </div>

          <hr />
        </div>

        {data.node ? (
          <div className="mt-5">
            <MetricDetailsSection metric={data.node} />
          </div>
        ) : (
          <div>Not Found</div>
        )}
      </div>

      <Dialog
        open={showNewDataPointModal}
        onOpenChange={(open) => {
          if (!open) {
            navigate({ search: { showNewDataPointModal: undefined } })
          }
        }}
      >
        <DialogContent>
          <NewMetricDataPoint metricId={metricId} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MetricDetails
