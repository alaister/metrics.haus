import { usePreloadedQuery } from 'react-relay'
import indexRoute, { query } from './imports-route'
import ImportsList from '~/components/imports/ImportsList'

const Index: (typeof indexRoute)['options']['component'] = ({ useLoader }) => {
  const { queryRef } = useLoader()
  const data = usePreloadedQuery(query, queryRef)

  console.log('in list')

  return (
    <>
      <ImportsList queryFragment={data} />
    </>
  )
}

export default Index
