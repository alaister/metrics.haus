import { format, subDays } from 'date-fns'
import {
  Area,
  AreaChart,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { cn } from '~/lib/utils'
import { createTickDates, timestampToLabel } from '../../lib/chart-helpers'
import { useMemo } from 'react'

const MAX_TICKS = 5

const CHART_COLOR = '#82ca9d'
const EMPTY_CHART_COLOR = '#eee'

export interface DataPoint {
  nodeId: string
  time: string
  value: number
}
export interface LineChartProps {
  dataPoints: DataPoint[]
  preview?: boolean
  containerClassName?: string
}

export function LineChart({
  dataPoints,
  preview = false,
  containerClassName,
}: LineChartProps) {
  const isEmpty = dataPoints.length == 0

  const sortedDataPoints = useMemo(
    () => dataPoints.sort((a, b) => +new Date(a.time) - +new Date(b.time)),
    [dataPoints],
  )

  const dataForChart = isEmpty ? getRandomData() : sortedDataPoints

  const ticks = createTickDates(
    dataForChart.map((m) => new Date(m.time)),
    MAX_TICKS,
  ).map((d) => d.getTime())

  const chartData = dataForChart.map((it) => ({
    ts: new Date(it.time).getTime(),
    value: it.value,
  }))

  return (
    <div className={cn('w-full h-full', containerClassName)}>
      <div className={preview ? 'h-full' : 'h-3/4 md:h-5/6'}>
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
              <Tooltip content={<CustomTooltip />} trigger="hover" />
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
                tickFormatter={(t) =>
                  isEmpty ? '' : Number(t).toLocaleString() || ''
                }
                tick={{
                  fontSize: 12,
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {!preview && (
        <div className={'h-1/4 md:h-1/6'}>
          <ResponsiveContainer>
            <RechartsLineChart
              data={chartData.map((d) => ({ ...d, value: 0 }))}
            >
              <YAxis
                tickFormatter={() => ''}
                type="number"
                tickCount={0}
                domain={[0, 1]}
              />

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

              <Line dataKey="value" opacity={0} />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

type TooltipProps = {
  active: boolean
  payload: { payload: { ts: number; value: number } }[]
}

function CustomTooltip(props: Partial<TooltipProps>) {
  // handling mf recharts + typescript
  const { active, payload } = props as TooltipProps
  if (!active || !payload?.length) return <span></span>

  return (
    <div className="bg-gray-900 py-2 px-2 text-white bg-gray-900 py-2 px-2 text-white rounded-md">
      {payload[0].payload.value.toLocaleString()}
      <p className="text-xs text-gray-400">
        {format(new Date(payload[0].payload.ts), 'LLL dd, y')}
      </p>
    </div>
  )
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
