import { cn } from '~/lib/utils'
import styles from './LoadingDots.module.css'

export type LoadingDotsProps = {
  className?: string
}

const LoadingDots = ({ className }: LoadingDotsProps) => {
  return (
    <span className={cn(styles.loading, className)}>
      <span />
      <span />
      <span />
    </span>
  )
}

export default LoadingDots
