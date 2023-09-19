import { Outlet, useNavigate } from 'react-router-dom'
import { Dialog, DialogContent } from '../ui/dialog'

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
        <Outlet />
      </DialogContent>
    </Dialog>
  )
}

export default DialogLayout
