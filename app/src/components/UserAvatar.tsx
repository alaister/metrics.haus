import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/DropdownMenu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '~/lib/supabase'
import { toast } from '~/lib/hooks/use-toast'
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'

export function UserAvatar() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const signOut = async () => {
    setIsLoading(true)

    const { error } = await supabase.auth.signOut({ scope: 'local' })
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: error.message,
      })
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    navigate('/sign-in', { replace: true })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={signOut} disabled={isLoading}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
