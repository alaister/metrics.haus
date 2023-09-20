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
import { Metric } from './typedef'
import { useState } from 'react'
import { addDays, subDays } from 'date-fns'
import { createTickDates, timestampToLabel } from './chart-helper'
import { titleCase } from '~/lib/utils'
import { Button } from '../ui/Button'

const MAX_TICKS = 5

type Props = {
  metric: Metric
}

const CHART_COLOR = '#82ca9d'

export function LineChart({ metric }: Props) {
  const [threads, setThreads] = useState<Thread[]>([
    {
      user: '342384283492834',
      comment: 'Why did that shit happen here',
      timestamp: addDays(metric.entries[0].timestamp, 1),
      id: Math.random().toString(),
    },
  ])

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
    metric.entries.map((m) => m.timestamp),
    MAX_TICKS,
  ).map((d) => d.getTime())

  const data = metric.entries.map((it) => ({
    ts: it.timestamp.getTime(),
    value: it.value,
  }))

  return (
    <div className="w-full h-full">
      <div className="pl-10 pb-4">
        <label className="text-md">{titleCase(metric.metricId)}</label>
      </div>
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={750} height={250} data={data}>
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

            <Tooltip
              content={<CustomTooltip handleClick={addThread} />}
              trigger="click"
            />

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
          <RechartsLineChart data={data}>
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
    </div>
  )
}

function CustomTooltip({ active, payload, handleClick }: any) {
  const [comment, setComment] = useState('')
  if (!active || !payload?.length) return null

  const { ts } = payload[0].payload

  return (
    <div className="bg-white rounded shadow ">
      <input type="text" />
      <Button
        className="pointer-events-auto"
        onClick={() => handleClick(new Date(ts))}
      >
        Add Comment
      </Button>
      cl
    </div>
  )
}

type Thread = {
  comment: string
  user: string
  timestamp: Date
  id: string
}
