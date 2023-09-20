import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TeamState {
  selectedTeamId: string | null
}

const initialState: TeamState = {
  selectedTeamId: null,
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setSelectedTeamId: (state, action: PayloadAction<string>) => {
      state.selectedTeamId += action.payload
    },
  },
})

export const { setSelectedTeamId } = teamSlice.actions

export default teamSlice.reducer
