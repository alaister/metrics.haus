import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User } from '@supabase/gotrue-js'

export interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
