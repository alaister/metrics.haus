import { BellIcon } from 'lucide-react'
import { Button } from '../ui/Button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'

export function Notifications() {
  const notifications = [
    {
      id: '1',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '2',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '3',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '4',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '5',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '6',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '7',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
    {
      id: '8',
      text: 'hello',
      metadata: {
        type: 'url',
        url: 'https://example.com',
      },
    },
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <BellIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 px-0 py-0" align="end">
        <div className="h-[100px] overflow-auto">
          {notifications.map((n) => {
            return (
              <div
                key={n.id}
                className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              >
                {n.text}
              </div>
            )
          })}
        </div>
        <div className="border-t flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50">
          Mark all as read
        </div>
      </PopoverContent>
    </Popover>
  )
}
