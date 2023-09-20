export type MetricEntry = {
  timestamp: Date
  value: number
}

export type Metric = {
  metricId: string
  owner: string
  entries: MetricEntry[]
}
