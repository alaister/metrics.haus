import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { subMonths } from 'date-fns'

interface Interval {
  from: string | undefined
  to: string | undefined
}

export interface PointsState {
  metricsInterval: Interval
}

const initialState: PointsState = {
  metricsInterval: {
    from: subMonths(new Date(), 1).toISOString(),
    to: new Date().toISOString(),
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMetricsInterval: (state, action: PayloadAction<Interval>) => {
      state.metricsInterval = action.payload
    },
  },
})

export const { setMetricsInterval } = appSlice.actions

export default appSlice.reducer
