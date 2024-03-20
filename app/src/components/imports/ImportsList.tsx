import { graphql } from '~/lib/gql'
import { useQuery } from '@apollo/client'
import { Link } from '~/lib/router'

const ImportsQuery = graphql(/* GraphQL */ `
  query ImportsListQuery {
    importsCollection(orderBy: [{ createdAt: DescNullsLast }]) {
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
`)

const ImportsList = () => {
  const { data } = useQuery(ImportsQuery)
  const imports = data?.importsCollection?.edges ?? []

  console.log({ imports })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imports.length > 0 &&
        imports.map(({ node }) => (
          <Link key={node.nodeId} to="/imports/:id" params={{ id: node.id }}>
            <div className="rounded-lg border shadow pt-4 cursor-pointer">
              <div className="px-4 pb-4 border-b">{node.fileName}</div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default ImportsList
