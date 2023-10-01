'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'
import { Button } from '../ui/Button'
import { cn } from '~/lib/utils'
import { Calendar } from '../ui/Calendar'
import { useAppDispatch, useAppSelector } from '~/stores'
import { setMetricsInterval } from '~/stores/app-slice'

interface Props {
  onChange?: (date: DateRange) => void
}

function IntervalPicker(props: Props) {
  const metricInterval = useAppSelector((state) => state.app.metricsInterval)
  const dispatcher = useAppDispatch()
  const [date, setDate] = React.useState<DateRange | undefined>(metricInterval)

  const onDateSelected = (date?: DateRange) => {
    if (date) {
      setDate(date)
      props.onChange?.(date)
      dispatcher(setMetricsInterval(date))
    }
  }

  return (
    <div className={cn('grid gap-2', '')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateSelected}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default IntervalPicker
