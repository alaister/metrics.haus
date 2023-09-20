import { createClient } from '@supabase/supabase-js'
import { navigatorLock } from '@supabase/gotrue-js'
import { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or key')
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    lock: navigatorLock, // old Safari not accepted
  },
})

export default supabase
