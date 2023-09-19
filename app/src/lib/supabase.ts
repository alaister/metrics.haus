import { createClient } from '@supabase/supabase-js'
import { navigatorLock } from '@supabase/gotrue-js'
import { Database } from './database.types'

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase URL or key')
}

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    lock: navigatorLock, // old Safari not accepted
    debug: true,
  },
})

export default supabase
