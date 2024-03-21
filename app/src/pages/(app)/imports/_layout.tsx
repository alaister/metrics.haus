import { Plus } from 'lucide-react'
import { Button } from '../../../components/ui/Button'
import { Link } from '~/lib/router'
import { Outlet } from 'react-router-dom'

const ImportLayout = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Imports
        </h1>

        <Button variant="outline" asChild>
          <Link to="/imports/new">
            <Plus className="w-4 h-4" />
            <span>New Import</span>
          </Link>
        </Button>
      </div>

      <Outlet />
    </div>
  )
}

export default ImportLayout
