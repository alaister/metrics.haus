import { useNavigate } from '@tanstack/react-router'
import { usePreloadedQuery } from 'react-relay'
import MetricsList from '../metrics/MetricsList'
import { Dialog, DialogContent } from '../ui/Dialog'
import indexRoute, { query } from './index-route'
import NewMetric from './metrics/NewMetric'

const Index: (typeof indexRoute)['options']['component'] = ({
  useLoader,
  useSearch,
}) => {
  const navigate = useNavigate()
  const { showNewMetricModal } = useSearch()

  const { queryRef } = useLoader()
  const data = usePreloadedQuery(query, queryRef)

  return (
    <>
      <MetricsList queryFragment={data} />

      <Dialog
        open={showNewMetricModal}
        onOpenChange={(open) => {
          if (!open) {
            navigate({ search: { showNewMetricModal: undefined } })
          }
        }}
      >
        <DialogContent>
          <NewMetric />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Index
