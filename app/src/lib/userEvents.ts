import supabase from '~/lib/supabase'
import { Database, Json } from './database.types'

export type Event = Database['public']['Enums']['user_event']

export function emitUserEvent(
  event: Event,
  value: string | null = null,
  meta: Json | null = null,
) {
  return supabase
    .from('user_events')
    .insert({
      event,
      value,
      meta,
    })
    .then((resp) => {
      const { error } = resp
      if (error) {
        console.error(error)
      }
    })
}
