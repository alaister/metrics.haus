import { useMemo, useState } from 'react'
import { getAvatarUrl } from '~/lib/avatars'
import { toast } from '~/lib/hooks/use-toast'
import { Link, useNavigate } from '~/lib/router'
import supabase from '~/lib/supabase'
import { useAppSelector } from '~/stores'
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/DropdownMenu'

export function UserAvatar() {
  const user = useAppSelector((state) => state.auth.user)
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

  const avatarUrl = useMemo(
    () =>
      user ? getAvatarUrl(user.user_metadata.avatar_path ?? null) : undefined,
    [user],
  )

  const avatarName: string =
    user?.user_metadata.display_name ??
    user?.user_metadata.handle ??
    'Current User'

  const avatarFallback = avatarName
    .split(' ')
    .map((n) => n[0])
    .join(' ')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar size="md" className="border dark:border-slate-700">
          <AvatarImage src={avatarUrl} alt={avatarName} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link to="/account">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut} disabled={isLoading}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
