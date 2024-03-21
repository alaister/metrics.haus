import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { DateRange } from 'react-day-picker'
import { cn } from '~/lib/utils'
import { useAppDispatch, useAppSelector } from '~/stores'
import { setMetricsInterval } from '~/stores/app-slice'
import { Button } from '../ui/Button'
import { Calendar } from '../ui/Calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'

interface Props {
  onChange?: (date: DateRange) => void
}

function IntervalPicker(props: Props) {
  const metricInterval = useAppSelector((state) => state.app.metricsInterval)
  const dispatcher = useAppDispatch()
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: metricInterval.from ? new Date(metricInterval.from) : undefined,
    to: metricInterval.to ? new Date(metricInterval.to) : undefined,
  })

  const onDateSelected = (date?: DateRange) => {
    if (date) {
      setDate(date)
      props.onChange?.(date)
      dispatcher(
        setMetricsInterval({
          from: date.from?.toISOString(),
          to: date.to?.toISOString(),
        }),
      )
    }
  }

  return (
    <div className="grid gap-2">
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
