import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '~/lib/supabase'
import authReducer, { setUser } from './auth-slice'
import teamReducer from './team-slice'
import appReducer from './app-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    team: teamReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

supabase.auth.onAuthStateChange((_event, session) => {
  store.dispatch(setUser(session?.user ?? null))
})
