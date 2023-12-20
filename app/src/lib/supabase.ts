import { navigatorLock } from '@supabase/gotrue-js'
import { createClient } from '@supabase/supabase-js'
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './config'
import { Database } from './database.types'

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    lock: navigatorLock, // old Safari not accepted
  },
})

export default supabase
