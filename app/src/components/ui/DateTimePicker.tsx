import { Calendar as CalendarIcon } from 'lucide-react'
import { ChangeEventHandler, useState } from 'react'
import { SelectSingleEventHandler } from 'react-day-picker'
import { cn } from '~/lib/utils'
import { format } from 'date-fns'
import { Button } from './Button'
import { Calendar } from './Calendar'
import { Input } from './Input'
import { Label } from './Label'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'

interface DateTimePickerProps {
  date: Date
  setDate: (date: Date) => void
}

export function DateTimePicker({ date, setDate }: DateTimePickerProps) {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(date)

  const handleSelect: SelectSingleEventHandler = (_day, selected) => {
    const selectedDay = selected
    const modifiedDay = new Date(
      new Date(selectedDay.setHours(selectedDay.getHours())).setMinutes(
        selectedDateTime.getMinutes(),
      ),
    )

    setSelectedDateTime(modifiedDay)
    setDate(modifiedDay)
  }

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target
    const hours = Number.parseInt(value.split(':')[0] || '00', 10)
    const minutes = Number.parseInt(value.split(':')[1] || '00', 10)
    const modifiedDay = new Date(
      new Date(selectedDateTime.setHours(hours)).setMinutes(minutes),
    )

    setSelectedDateTime(modifiedDay)
    setDate(modifiedDay)
  }

  const footer = (
    <>
      <div className="px-4 pt-0 pb-4">
        <Label>Time</Label>
        <Input
          type="time"
          onChange={handleTimeChange}
          value={format(selectedDateTime, 'HH:mm')}
        />
      </div>
      {!selectedDateTime && <p>Please pick a day.</p>}
    </>
  )

  return (
    <Popover>
      <PopoverTrigger asChild className="z-10">
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(selectedDateTime, 'LLL dd, y HH:mm')
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDateTime}
          onSelect={handleSelect}
          initialFocus
        />
        {footer}
      </PopoverContent>
    </Popover>
  )
}
