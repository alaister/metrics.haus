import supabase from '~/lib/supabase'

export function emitUserEvent(
  event: string,
  value: string | null = null,
  meta: unknown | null = null,
) {
  supabase
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
