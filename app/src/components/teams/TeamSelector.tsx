import { useQuery } from '@apollo/client'
import { graphql } from '~/lib/gql'
import { useAppDispatch, useAppSelector } from '~/stores'
import { setSelectedTeamId } from '~/stores/team-slice'

const TeamSelectorQuery = graphql(/* GraphQL */ `
  query TeamSelectorQuery {
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
`)

const TeamSelector = () => {
  useQuery(TeamSelectorQuery, {
    onCompleted(data) {
      if (!selectedTeamId && (data.teamsCollection?.edges.length ?? 0) > 0) {
        const teamId = data.teamsCollection?.edges[0].node.id
        if (teamId) {
          dispatch(setSelectedTeamId(teamId))
        }
      }
    },
  })

  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)
  const dispatch = useAppDispatch()

  return <div></div>
}

export default TeamSelector
