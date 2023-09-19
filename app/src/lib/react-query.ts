import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // Don't retry on 404s
        if (
          typeof error === 'object' &&
          error !== null &&
          'code' in error &&
          typeof error.code === 'string' &&
          (error.code === 'PGRST116' || error.code === '42P01')
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
