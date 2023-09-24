import { createSlice } from '@reduxjs/toolkit'
import type { AnyAction, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import supabase from '~/lib/supabase'

export interface PointsState {
  points: number
  confetti: boolean
}

const initialState: PointsState = {
  points: 0,
  confetti: false,
}

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setPoints: (state, action: PayloadAction<number>) => {
      state.points = action.payload
    },
    setPointsWithConfetti: (state, action: PayloadAction<number>) => {
      const newPoints = action.payload
      if (newPoints > state.points) {
        state.confetti = true
        state.points = newPoints
      }
    },
    resetConfetti: (state) => {
      state.confetti = false
    },
  },
})

export const { setPoints, setPointsWithConfetti, resetConfetti } =
  pointsSlice.actions

export const refreshPoints =
  (withConfetti: boolean = false) =>
  async (dispatch: Dispatch<AnyAction>) => {
    // pretend this is graphql
    const { data, error } = await supabase.from('user_stats').select('*')
    if (error) {
      console.error('cannot refresh points:', error)
      return
    }

    // thanks chatgpt
    const stats: { [key: string]: number } = {}
    for (const item of data) {
      if (item.event && typeof item.count === 'number') {
        stats[item.event] = item.count
      }
    }

    // proprietary open source formula
    const points =
      (stats.num_add_data_point ?? 0) +
      (stats.num_add_metric ?? 0) * 10 +
      (stats.num_update_avatar ? 50 : 0)

    if (withConfetti) {
      dispatch(setPointsWithConfetti(points))
      setTimeout(() => {
        dispatch(resetConfetti())
      }, 2000)
    } else {
      dispatch(setPoints(points))
    }
  }

export default pointsSlice.reducer
