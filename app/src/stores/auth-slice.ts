import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User } from '@supabase/gotrue-js'

export interface AuthState {
  user: User | null
  hasLoaded: boolean
}

const initialState: AuthState = {
  user: null,
  hasLoaded: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.hasLoaded = true
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
