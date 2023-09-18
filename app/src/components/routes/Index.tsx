import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import { Button } from '~/components/ui/Button'
import supabase from '~/lib/supabase'

const Index = () => {
  const { data, count, error } = useQuery(
    supabase
      .from('example')
      .select('id', { count: 'exact' })
      .eq('id', 2)
      .single()
  )

  return (
    <div>
      <Button>This is a SHADCN button</Button>
      <pre>
        <code>{JSON.stringify({ data, count, error }, null, 2)}</code>
      </pre>
    </div>
  )
}

export default Index
