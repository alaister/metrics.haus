import { format } from 'date-fns'

export function createTickDates(timestamps: Date[], numTicks: number): Date[] {
  if (timestamps.length < 2) return timestamps

  const firstMs = timestamps.at(0)!.getTime()
  const lastMs = timestamps.at(-1)!.getTime()

  const intervalTime = lastMs - firstMs

  const stepMs = intervalTime / (numTicks - 1)

  const inBetweenTicksMs = Array.from({ length: numTicks - 2 }).map(
    (_, idx) => {
      return Math.round(firstMs + (idx + 1) * stepMs)
    },
  )

  return [firstMs, ...inBetweenTicksMs, lastMs].map((ms) => new Date(ms))
}

export function timestampToLabel(ts: Date) {
  return format(ts, 'do LLL')
}
