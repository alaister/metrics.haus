import { MetricDataPointForm } from '~/components/metrics/MetricDataPointForm'
import { Dialog, DialogContent } from '~/components/ui/Dialog'
import { useModals, useParams } from '~/lib/router'

const NewDataPointModal = () => {
  const { id: metricId } = useParams('/metrics/:id')
  const modals = useModals()

  function onClose() {
    modals.close()
  }

  return (
    <Dialog
      open={true}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
        }
      }}
    >
      <DialogContent>
        <MetricDataPointForm metricId={metricId} onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  )
}

export default NewDataPointModal
