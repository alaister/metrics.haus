import { useFragment } from '@apollo/client'
import { graphql } from '~/lib/gql'
import { toUrlId } from '~/lib/ids'
import { Link } from '~/lib/router'

const ThreadFragment = graphql(/* GraphQL */ `
  fragment ThreadFragment on Threads {
    nodeId
    id
    createdAt
    title
    fromTimestamp
    toTimestamp
  }
`)

export interface ThreadProps {
  threadNodeId: string
}

const Thread = ({ threadNodeId }: ThreadProps) => {
  const { data: thread, complete } = useFragment({
    fragment: ThreadFragment,
    fragmentName: 'ThreadFragment',
    from: {
      nodeId: threadNodeId,
    },
  })

  if (!complete) {
    return null
  }

  return (
    <div>
      <Link
        to="/threads/:id"
        params={{ id: toUrlId({ id: thread.id, title: thread.title }) }}
      >
        {thread.title}
      </Link>
      <p>{thread.fromTimestamp}</p>
      <p>{thread.toTimestamp}</p>
    </div>
  )
}

export default Thread
