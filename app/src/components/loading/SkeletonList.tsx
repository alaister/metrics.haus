import { useMemo } from 'react'

type SkeletonListProps = {
  count?: number
  skeleton: ({ index }: { index?: number }) => JSX.Element
}

const SkeletonList = ({ count = 5, skeleton: Skeleton }: SkeletonListProps) => {
  const list = useMemo(() => Array.from({ length: count }), [count])

  return (
    <>
      {list.map((_, i) => (
        <Skeleton key={i} index={i} />
      ))}
    </>
  )
}

export default SkeletonList
