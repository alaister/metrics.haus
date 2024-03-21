import { useQuery } from '@apollo/client'
import { useState } from 'react'
import Select, { MultiValue } from 'react-select'
import { graphql } from '~/lib/gql'

const TeamMembersSelectorQuery = graphql(/* GraphQL */ `
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
`)

interface TeamMembersSelectorProps {
  selectedTeamId: string
  onValueChange: (profileIds: string[]) => void
}

/**
 * Uses react-select because it needs to be a multi-select and radix select is not multiselect
 */
const TeamMembersSelector = ({
  onValueChange,
  selectedTeamId,
}: TeamMembersSelectorProps) => {
  const { data } = useQuery(TeamMembersSelectorQuery, {
    variables: {
      teamId: selectedTeamId,
    },
  })
  const options = data?.teamMembersCollection?.edges.map((x) => ({
    label: x.node.profile?.name || '-',
    value: x.node.profile?.id || '-',
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
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
        })}
        // copy pasta https://stackoverflow.com/a/74481208/1476137
        styles={{
          control: (base) => ({
            ...base,
            boxShadow: 'none',
            borderColor: '#e5e7eb',
            '&:hover': { borderColor: '#e5e7eb' },
            fontFamily: 'Inter var',
            fontSize: '14px',
          }),
        }}
      />
    </div>
  )
}

export default TeamMembersSelector
