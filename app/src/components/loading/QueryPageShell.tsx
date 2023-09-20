/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlertCircle } from 'lucide-react'
import { ComponentType, ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryLoader } from 'react-relay'
import { useLoaderData } from 'react-router-dom'
import { GraphQLTaggedNode } from 'relay-runtime'
import { Alert, AlertDescription, AlertTitle } from '../ui/Alert'
import { Button } from '../ui/Button'

type QueryPageShellProps = {
  query: GraphQLTaggedNode
  fallback?: ReactNode
  pageComponent: ComponentType<{
    queryRef: any
  }>
}

const QueryPageShell = ({
  fallback,
  query,
  pageComponent: Page,
}: QueryPageShellProps) => {
  const { initialQueryRef } = useLoaderData() as any
  const [queryRef, loadQuery] = useQueryLoader(query, initialQueryRef)

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <Alert variant="destructive" className="col-span-3">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error?.message}</AlertDescription>
          <Button
            onClick={() => {
              loadQuery(initialQueryRef)
              resetErrorBoundary()
            }}
          >
            Retry
          </Button>
        </Alert>
      )}
    >
      <Suspense fallback={fallback}>
        <Page queryRef={queryRef} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default QueryPageShell
