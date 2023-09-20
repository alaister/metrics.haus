import { useState, useRef } from 'react'
import { useFragment } from 'react-relay'
import { LineChart } from './LineChart'
import { graphql } from 'relay-runtime'
import { MetricDetailsSection_metrics$key } from './__generated__/MetricDetailsSection_metrics.graphql'
import { useAppSelector } from '~/stores'
import { Input } from '../ui/Input'

const MetricDetailsSectionFragment = graphql`
  fragment MetricDetailsSection_metrics on Metrics {
    dataPoints: metricsDataPointsCollection {
      totalCount
    }
    ...LineChart_metrics
  }
`

export interface MetricDetailsProps {
  metric: MetricDetailsSection_metrics$key
}

const MetricDetailsSection = ({ metric }: MetricDetailsProps) => {
  const [pendingCommentDate, setPendingCommentDate] = useState<null | Date>(
    null,
  )
  const [comment, setComment] = useState('')

  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)

  const data = useFragment(MetricDetailsSectionFragment, metric)

  const inputRef = useRef<HTMLInputElement | null>(null)
  if (pendingCommentDate) {
    setTimeout(() => {
      inputRef.current?.focus()
      inputRef.current?.scrollIntoView()
    }, 1)
  }

  return (
    <>
      <div className="w-full h-[250px] md:h-[500px]">
        <LineChart
          dataPoints={data}
          handleCommentAddition={setPendingCommentDate}
          containerClassName="h-full"
        />
      </div>
      <div className="mt-8 pr-8 pl-12">
        {pendingCommentDate && (
          <div>
            <Input
              ref={inputRef}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default MetricDetailsSection
