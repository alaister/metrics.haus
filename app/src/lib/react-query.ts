import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        console.log('error:', error)
        // Don't retry on 404s
        if (
          typeof error === 'object' &&
          error !== null &&
          'code' in error &&
          error.code === 'PGRST116'
        ) {
          return false
        }

        if (failureCount < 3) {
          return true
        }

        return false
      },
    },
  },
})
