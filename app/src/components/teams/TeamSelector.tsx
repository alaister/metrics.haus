import { useEffect } from 'react'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useAppDispatch, useAppSelector } from '~/stores'
import { setSelectedTeamId } from '~/stores/team-slice'
import { TeamSelector_Query } from './__generated__/TeamSelector_Query.graphql'

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
  const data = useLazyLoadQuery<TeamSelector_Query>(TeamSelectorQuery, {})
  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!selectedTeamId && (data.teamsCollection?.edges.length ?? 0) > 0) {
      const teamId = data.teamsCollection?.edges[0].node.id
      if (teamId) {
        dispatch(setSelectedTeamId(teamId))
      }
    }
  }, [data, dispatch, selectedTeamId])

  return <div></div>
}

export default TeamSelector
