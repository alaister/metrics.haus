import { useFragment } from 'react-relay'
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  LineChart as RechartsLineChart,
  ReferenceDot,
  Tooltip,
  Line,
} from 'recharts'
import { useState } from 'react'
import { createTickDates, timestampToLabel } from './chart-helper'
import { Button } from '../ui/Button'
import { graphql } from 'relay-runtime'
import { LineChart_metrics$key } from './__generated__/LineChart_metrics.graphql'

const MAX_TICKS = 5

const CHART_COLOR = '#82ca9d'

const LineChartMetricsFragment = graphql`
  fragment LineChart_metrics on Metrics {
    metricsDataPointsCollection {
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
  allowComments: boolean
}

export function LineChart({ dataPoints, allowComments }: LineChartProps) {
  const data =
    useFragment(
      LineChartMetricsFragment,
      dataPoints,
    ).metricsDataPointsCollection?.edges.map((e) => e.node) ?? []

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

  const ticks = createTickDates(
    data.map((m) => new Date(m.time)),
    MAX_TICKS,
  ).map((d) => d.getTime())

  const chartData = data.map((it) => ({
    ts: new Date(it.time).getTime(),
    value: it.value,
  }))

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={750} height={250} data={chartData}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={CHART_COLOR} stopOpacity={0.8} />
              <stop offset="95%" stopColor={CHART_COLOR} stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke={CHART_COLOR}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPv)"
          />

          {allowComments && (
            <Tooltip
              content={<CustomTooltip handleClick={addThread} />}
              trigger="click"
            />
          )}

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
          <YAxis
            type="number"
            padding={{ bottom: 16 }}
            tickMargin={8}
            tickFormatter={(t) => t || ''}
            tick={{
              fontSize: 12,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={100}>
        <RechartsLineChart data={chartData}>
          <YAxis tickFormatter={() => ''} type="number" tickCount={0} />
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
          {threads.map((t) => (
            <ReferenceDot
              className="cursor-pointer"
              key={t.id}
              r={6}
              stroke=""
              fill="#333"
              y={0.5}
              x={t.timestamp.getTime()}
              onClick={() => alert(t.comment)}
            />
          ))}
          <Line dataKey="value" opacity={0} />
        </RechartsLineChart>
      </ResponsiveContainer>
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
