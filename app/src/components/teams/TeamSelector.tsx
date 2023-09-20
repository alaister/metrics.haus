import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'

const TeamSelectorQuery = graphql`
  query TeamSelector_Query {
    teamsCollection {
      edges {
        node {
          nodeId
          id
          name
        }
      }
    }
  }
`

const TeamSelector = () => {
  const data = useLazyLoadQuery(TeamSelectorQuery, {})
  console.log('data:', data)

  return <div></div>
}

export default TeamSelector
