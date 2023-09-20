import { PreloadedQuery, usePreloadedQuery } from 'react-relay'
import { MetricDetails_Query } from './__generated__/MetricDetails_Query.graphql'
import { query } from './MetricDetails.data'
import { Button } from '../ui/Button'
import { Link, Outlet } from 'react-router-dom'
import { Plus } from 'lucide-react'

export interface MetricDetailsProps {
  queryRef: PreloadedQuery<MetricDetails_Query>
}

const MetricDetails = ({ queryRef }: MetricDetailsProps) => {
  const data = usePreloadedQuery(query, queryRef)

  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold leading-none tracking-tight">
            {data.node?.name}
          </h1>

          <div className="flex gap-1">
            <Button variant="outline" asChild>
              <Link to={`new-data`}>
                <Plus className="w-4 h-4" />
                <span>Add Data Point</span>
              </Link>
            </Button>
            <Button variant="outline">
              <Plus className="w-4 h-4" />
              <span>Send a notification</span>
            </Button>
          </div>
        </div>

        <hr />

        <Outlet />
      </div>

      <div className="mt-5">{data.node?.id}</div>
    </div>
  )
}

export default MetricDetails
