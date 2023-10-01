import { LineChart } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/Command'
import { Button } from '../ui/Button'
import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'
import supabase from '~/lib/supabase'
import { useAppSelector } from '~/stores'
import { useNavigate } from '@tanstack/react-router'
import { Database } from '~/lib/database.types'

export function CmdKDialog() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searching, setSearching] = useState(false)
  const navigate = useNavigate()

  const selectedTeamId = useAppSelector((state) => state.team.selectedTeamId)

  const debounceFn = useCallback(debounce(handleDebounceFn, 350), [
    selectedTeamId,
  ])

  const [metrics, setMetrics] = useState<
    Database['public']['Tables']['metrics']['Row'][]
  >([])

  async function handleDebounceFn(inputValue: string) {
    if (inputValue.length) {
      setSearching(true)
      const { data: metricsBySearchTerm } = await supabase
        .from('metrics')
        .select('*')
        .eq('team_id', selectedTeamId!)
        .eq('archived', false)
        .ilike('name', `%${inputValue}%`)
        .limit(5)

      setMetrics(metricsBySearchTerm!)
      setSearching(false)
    } else {
      setMetrics([])
    }
  }

  function handleChange(val: string) {
    setSearchTerm(val)
    debounceFn(val)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="min-w-[150px] flex gap-x-5 text-gray-600"
      >
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[12px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={searchTerm}
          onValueChange={(val) => handleChange(val)}
        />
        <CommandList>
          {searching && <span>Loading....</span>}
          {!searching && <CommandEmpty>No results found.</CommandEmpty>}

          {metrics.length > 0 && (
            <CommandGroup heading="Metrics">
              {metrics.map((metric) => (
                <CommandItem
                  onSelect={() => {
                    navigate({
                      to: `/metrics/$metricId`,
                      params: { metricId: metric.id },
                      replace: true,
                    })
                    setOpen(false)
                    setMetrics([])
                    setSearchTerm('')
                  }}
                  key={metric.id}
                >
                  <LineChart className="mr-2 h-4 w-4" />
                  <span>{metric.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
