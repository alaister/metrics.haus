import { Link, Outlet } from '@tanstack/react-router'
import { Plus } from 'lucide-react'
import { Button } from '../ui/Button'

const ImportLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Imports
        </h1>

        <Button variant="outline" asChild>
          <Link
            search={{ showNewImportModal: true }}
            mask={{ to: '/imports/new' }}
          >
            <Plus className="w-4 h-4" />
            <span>New Import</span>
          </Link>
        </Button>
      </div>

      <hr />

      <Outlet />
    </div>
  )
}

export default ImportLayout
