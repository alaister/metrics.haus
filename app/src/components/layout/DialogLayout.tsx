import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Dialog, DialogContent } from '../ui/Dialog'

const DialogLayout = () => {
  const navigate = useNavigate()

  return (
    <Dialog
      open={true}
      onOpenChange={(open) => {
        if (!open) {
          navigate(-1)
        }
      }}
    >
      <DialogContent>
        <Suspense>
          <Outlet />
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}

export default DialogLayout
