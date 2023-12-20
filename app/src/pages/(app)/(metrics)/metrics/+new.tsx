import MetricForm from '~/components/metrics/MetricForm'
import { Dialog, DialogContent } from '~/components/ui/Dialog'
import { useModals } from '~/lib/router'

const NewMetricModal = () => {
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
        <MetricForm
          onSuccess={() => {
            modals.close()
          }}
        />
      </DialogContent>
    </Dialog>
  )
}

export default NewMetricModal
