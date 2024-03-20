import clsx from 'clsx'
import { useMemo } from 'react'

export type CommentBodyProps = {
  body: string
  hasBeenDeleted?: boolean
}

const CommentBody = ({ body, hasBeenDeleted = false }: CommentBodyProps) => {
  const bodyWithMentions = useMemo(() => {
    return body.split(/(@\[.*?]\(.*?\))/g).map((part) => {
      const match = part.match(/^@\[(.*?)]\((.*?)\)$/)

      if (!match) {
        return part
      }

      const [, name, id] = match

      return (
        <span>
          {name} ({id})
        </span>
      )
    })
  }, [body])

  return (
    <p
      className={clsx('whitespace-pre-wrap', hasBeenDeleted && 'text-gray-400')}
    >
      {bodyWithMentions}
    </p>
  )
}

export default CommentBody
