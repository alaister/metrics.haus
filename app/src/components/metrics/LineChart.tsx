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
import { createTickDates, timestampToLabel } from './chart-helper'
import { Button } from '../ui/Button'
import { graphql } from 'relay-runtime'
import { LineChart_metrics$key } from './__generated__/LineChart_metrics.graphql'
import { subDays } from 'date-fns'
import { cn } from '~/lib/utils'

const MAX_TICKS = 5

const CHART_COLOR = '#82ca9d'
const EMPTY_CHART_COLOR = '#eee'

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
    commentsCollection {
      edges {
        node {
          id
          timestamp
        }
      }
    }
  }
`

export interface LineChartProps {
  dataPoints: LineChart_metrics$key
  preview?: boolean
  containerClassName?: string
  handleCommentAddition?: (timestamp: Date) => void
  handleCommentClick?: (id: string) => void
}

export function LineChart({
  dataPoints,
  preview = false,
  containerClassName,
  handleCommentAddition = () => {},
  handleCommentClick = () => {},
}: LineChartProps) {
  const data = useFragment(LineChartMetricsFragment, dataPoints)

  const points =
    data.metricsDataPointsCollection?.edges.map((e) => e.node) ?? []

  const comments = data.commentsCollection?.edges.map((e) => e.node) ?? []

  const isEmpty = points.length == 0

  const dataForChart = isEmpty ? getRandomData() : points

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

            {!preview && (
              <Tooltip
                content={
                  <CustomTooltip
                    handleCommentAddition={handleCommentAddition}
                  />
                }
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
            {comments.map((t) => (
              <ReferenceDot
                className="cursor-pointer"
                key={t.id}
                r={6}
                stroke=""
                fill="#333"
                y={0.6}
                x={new Date(t.timestamp).getTime()}
                onClick={() => handleCommentClick(t.id)}
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
  handleCommentAddition: (d: Date) => void
}
function CustomTooltip(props: Partial<TooltipProps>) {
  // handling mf recharts + typescript
  const { active, payload, handleCommentAddition } = props as TooltipProps
  if (!active || !payload?.length) return null

  const { ts } = payload[0].payload

  return (
    <Button
      className="pointer-events-auto"
      onClick={() => handleCommentAddition(new Date(ts))}
    >
      Add Comment
    </Button>
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
