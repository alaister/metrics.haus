const dayMs = 1000 * 60 * 60 * 24

const today = new Date()

// two weeks
const len = 14
export const mockMetrics = [
  {
    metricId: 'sign-ups',
    owner: 'Kevin',
    entries: Array.from({ length: len }).map((_, day) => ({
      timestamp: new Date(today.getTime() - dayMs * (len - day)),
      value: Math.random(),
    })),
  },
]
