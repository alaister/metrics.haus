import { subDays } from 'date-fns'
import { useState } from 'react'
import { useFragment } from 'react-relay'
import {
  Area,
  AreaChart,
  Line,
  LineChart as RechartsLineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { graphql } from 'relay-runtime'
import { cn } from '~/lib/utils'
import { createTickDates, timestampToLabel } from '../../lib/chart-helpers'
import { Button } from '../ui/Button'
import { LineChart_metrics$key } from './__generated__/LineChart_metrics.graphql'

const MAX_TICKS = 5

const CHART_COLOR = '#82ca9d'
const EMPTY_CHART_COLOR = '#eee'

const LineChartMetricsFragment = graphql`
  fragment LineChart_metrics on Metrics
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 100 }
  )
  @refetchable(queryName: "MetricsDataPointsPagination_Query") {
    metricsDataPointsCollection(
      after: $cursor
      first: $count
      orderBy: [{ time: AscNullsLast }]
    ) @connection(key: "MetricDataPoints_metrics_metricsDataPointsCollection") {
      edges {
        node {
          nodeId
          time
          value
        }
      }
    }
  }
`

export interface LineChartProps {
  dataPoints: LineChart_metrics$key
  preview?: boolean
  containerClassName?: string
}

export function LineChart({
  dataPoints,
  preview = false,
  containerClassName,
}: LineChartProps) {
  const data =
    useFragment(
      LineChartMetricsFragment,
      dataPoints,
    ).metricsDataPointsCollection?.edges.map((e) => e.node) ?? []

  const isEmpty = data.length == 0

  const [threads, setThreads] = useState<Thread[]>([])

  function addThread(timestamp: Date) {
    setThreads((ts) =>
      ts.concat({
        user: '342384283492834',
        comment: 'Another Threaddd',
        timestamp,
        id: Math.random().toString(),
      }),
    )
  }

  const dataForChart = isEmpty ? getRandomData() : data

  const ticks = createTickDates(
    dataForChart.map((m) => new Date(m.time)),
    MAX_TICKS,
  ).map((d) => d.getTime())

  const chartData = dataForChart.map((it) => ({
    ts: new Date(it.time).getTime(),
    value: it.value,
  }))

  return (
    <div className={cn('w-full, h-full', containerClassName)}>
      <div className={'h-3/4 md:h-5/6'}>
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isEmpty ? EMPTY_CHART_COLOR : CHART_COLOR}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={isEmpty ? EMPTY_CHART_COLOR : CHART_COLOR}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <Area
              dot={!preview}
              type="monotone"
              dataKey="value"
              stroke={isEmpty ? EMPTY_CHART_COLOR : CHART_COLOR}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPv)"
            />

            {!preview && !isEmpty && (
              <Tooltip
                content={<CustomTooltip handleClick={addThread} />}
                trigger="click"
              />
            )}

            {!preview && (
              <XAxis
                hide
                ticks={ticks}
                dataKey="ts"
                type="number"
                padding={{ left: 16 }}
                tickMargin={8}
                tick={{
                  fontSize: 12,
                }}
                tickFormatter={(ms) => timestampToLabel(new Date(ms))}
                domain={['dataMin', 'dataMax']}
              />
            )}

            {!preview && (
              <YAxis
                type="number"
                padding={{ bottom: 16 }}
                tickMargin={8}
                tickFormatter={(t) => (isEmpty ? '' : t || '')}
                tick={{
                  fontSize: 12,
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={'h-1/4 md:h-1/6'}>
        <ResponsiveContainer>
          <RechartsLineChart data={chartData.map((d) => ({ ...d, value: 0 }))}>
            {!preview && (
              <YAxis
                tickFormatter={() => ''}
                type="number"
                tickCount={0}
                domain={[0, 1]}
              />
            )}
            {!preview && (
              <XAxis
                ticks={ticks}
                dataKey="ts"
                type="number"
                padding={{ left: 16 }}
                tickMargin={8}
                tick={{
                  fontSize: 12,
                }}
                tickFormatter={(ms) => timestampToLabel(new Date(ms))}
                domain={['dataMin', 'dataMax']}
              />
            )}
            {threads.map((t) => (
              <ReferenceDot
                className="cursor-pointer"
                key={t.id}
                r={6}
                stroke=""
                fill="#333"
                y={0.6}
                x={t.timestamp.getTime()}
                onClick={() => alert(t.comment + ' TODO')}
              />
            ))}
            <Line dataKey="value" opacity={0} />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

type TooltipProps = {
  active: boolean
  payload: { payload: { ts: number } }[]
  handleClick: (d: Date) => void
}
function CustomTooltip(props: Partial<TooltipProps>) {
  // handling mf recharts + typescript
  const { active, payload, handleClick } = props as TooltipProps
  if (!active || !payload?.length) return null

  const { ts } = payload[0].payload

  return (
    <Button
      className="pointer-events-auto"
      onClick={() => handleClick(new Date(ts))}
    >
      Add Comment
    </Button>
  )
}

type Thread = {
  comment: string
  user: string
  timestamp: Date
  id: string
}

function getRandomData() {
  const today = new Date()
  return Array.from({
    length: 14,
  })
    .map((_, idx) => ({
      time: subDays(today, idx),
      value: Math.random().toString(),
      nodeId: Math.random().toString(),
    }))
    .reverse()
}
