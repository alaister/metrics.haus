import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import TeamSelector from '../teams/TeamSelector'
import { Notifications } from '../notifications'
import { UserAvatar } from '../UserAvatar'

const Header = () => {
  const [userStats, setUserStats] = useState<{
    num_data_points_created?: number
  }>({})
  useEffect(() => {
    supabase
      .rpc('get_user_stats')
      .single()
      .then((resp) => {
        const { data, error } = resp
        if (error) {
          toast({
            variant: 'destructive',
            title: 'Something went wrong',
            description: error.message,
          })
          return
        }
        setUserStats(data)
      })
  }, [])

  return (
    <header className="sticky top-0 border-b bg-white z-10">
      <div className="flex h-16 justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-medium">
            <Link to="/">metrics.haus</Link>
          </h1>
          <TeamSelector />
        </div>
        Points: {userStats.num_data_points_created ?? '...'}
        <div className="flex pr-6 gap-3">
          <Notifications />
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

export default Header
