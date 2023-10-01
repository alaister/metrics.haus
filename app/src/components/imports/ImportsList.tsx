import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { ImportsList_query$key } from './__generated__/ImportsList_query.graphql'
import { Link } from '@tanstack/react-router'

const ImportsFragment = graphql`
  fragment ImportsList_query on Query
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 100 }
  )
  @refetchable(queryName: "ImportsPagination_Query") {
    importsCollection(
      after: $cursor
      first: $count
      orderBy: [{ createdAt: DescNullsLast }]
    ) @connection(key: "Imports_query_importsCollection") {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          nodeId
          status
          createdAt
          fileName
        }
      }
    }
  }
`

export interface ImportsListProps {
  queryFragment: ImportsList_query$key
}

const ImportsList = ({ queryFragment }: ImportsListProps) => {
  const {
    data,
    // loadNext,
    // loadPrevious,
    // hasNext,
    // hasPrevious,
    // isLoadingNext,
    // isLoadingPrevious,
    // refetch,
  } = usePaginationFragment(ImportsFragment, queryFragment)
  const imports = data.importsCollection?.edges ?? []

  console.log({ imports })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imports.length > 0 &&
        imports.map(({ node }) => (
          <Link
            key={node.nodeId}
            to="/imports/$importId"
            params={{ importId: node.id }}
          >
            <div className="rounded-lg border shadow pt-4 cursor-pointer">
              <div className="px-4 pb-4 border-b">
                {node.fileName}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default ImportsList
