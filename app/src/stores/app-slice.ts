import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { subMonths } from 'date-fns'
import { DateRange } from 'react-day-picker'

export interface PointsState {
  metricsInterval: DateRange
}

const initialState: PointsState = {
  metricsInterval: { from: subMonths(new Date(), 1), to: new Date() },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMetricsInterval: (state, action: PayloadAction<DateRange>) => {
      state.metricsInterval = action.payload
    },
  },
})

export const { setMetricsInterval } = appSlice.actions

export default appSlice.reducer
