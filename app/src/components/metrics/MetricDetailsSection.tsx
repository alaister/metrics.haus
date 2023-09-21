import { useState } from 'react'
import { useFragment } from 'react-relay'
import { LineChart } from './LineChart'
import { graphql } from 'relay-runtime'
import { MetricDetailsSection_metrics$key } from './__generated__/MetricDetailsSection_metrics.graphql'
import CommentsForm from './CommentsForm'
import Comments from './Comments'

const MetricDetailsSectionFragment = graphql`
  fragment MetricDetailsSection_metrics on Metrics {
    id
    dataPoints: metricsDataPointsCollection {
      totalCount
    }
    commentsCollection {
      edges {
        node {
          profileId
          message
          replyTo
        }
      }
    }
    ...LineChart_metrics
    ...Comments_metrics
  }
`

export interface MetricDetailsProps {
  metric: MetricDetailsSection_metrics$key
}

const MetricDetailsSection = ({ metric }: MetricDetailsProps) => {
  const [pendingCommentDate, setPendingCommentDate] = useState<null | Date>(
    null,
  )
  const [openedThread, setOpenedThread] = useState('')

  const data = useFragment(MetricDetailsSectionFragment, metric)

  return (
    <>
      <div className="w-full h-[250px] md:h-[500px]">
        <LineChart
          dataPoints={data}
          handleCommentAddition={setPendingCommentDate}
          containerClassName="h-full"
          handleCommentClick={setOpenedThread}
        />
      </div>
      <div className="mt-8 pr-8 pl-12">
        {pendingCommentDate && !openedThread && (
          <div>
            <CommentsForm
              date={pendingCommentDate}
              metricId={data.id}
              onSuccess={() => setPendingCommentDate(null)}
            />
          </div>
        )}
        <Comments openThread={openedThread} commentsKey={data} />
      </div>
    </>
  )
}

export default MetricDetailsSection
