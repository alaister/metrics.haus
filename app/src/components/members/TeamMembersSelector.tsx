import { useState } from 'react'
import { useLazyLoadQuery } from 'react-relay'
import Select, { MultiValue } from 'react-select'
import { graphql } from 'relay-runtime'
import { TeamMembersSelector_Query } from './__generated__/TeamMembersSelector_Query.graphql'

const TeamMembersSelectorQuery = graphql`
  query TeamMembersSelector_Query($teamId: UUID!) {
    teamMembersCollection(filter: { teamId: { eq: $teamId } }) {
      edges {
        node {
          nodeId
          profile {
            id
            name
          }
        }
      }
    }
  }
`

interface TeamMembersSelectorProps {
  selectedTeamId: string
  onValueChange: (profileIds: string[]) => void
}

const TeamMembersSelector = ({
  onValueChange,
  selectedTeamId,
}: TeamMembersSelectorProps) => {
  const data = useLazyLoadQuery<TeamMembersSelector_Query>(
    TeamMembersSelectorQuery,
    { teamId: selectedTeamId },
  )
  const options = data.teamMembersCollection?.edges.map((x) => ({
    label: x.node.profile.name,
    value: x.node.profile.id,
  }))
  const [selectedMembers, setSelectedMembers] = useState<
    MultiValue<{
      label: string
      value: string
    }>
  >([])

  const updateSelectedMembers = (
    selectedMembers: MultiValue<{
      label: string
      value: string
    }>,
  ) => {
    const memberIds = selectedMembers.map((x) => x.value)
    setSelectedMembers(selectedMembers)
    onValueChange(memberIds)
  }

  return (
    <div>
      <Select
        defaultValue={selectedMembers}
        onChange={updateSelectedMembers}
        options={options}
        isMulti
      />
    </div>
  )
}

export default TeamMembersSelector
