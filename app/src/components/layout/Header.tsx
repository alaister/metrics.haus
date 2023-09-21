import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import { UserAvatar } from '../UserAvatar'
import { CmdKDialog } from '../cmdk/CmdKDialog'
import { Notifications } from '../notifications'
import TeamSelector from '../teams/TeamSelector'

const Header = () => {
  const [userPoints, setUserPoints] = useState(0)
  useEffect(() => {
    // pretend this is graphql
    supabase
      .from('user_stats')
      .select('*')
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

        // thanks chatgpt
        const stats: { [key: string]: number } = {}
        for (const item of data) {
          if (item.event && typeof item.count === 'number') {
            stats[item.event] = item.count
          }
        }

        console.log(stats)

        // propriatary open source formula
        const points =
          (stats.num_add_data_point ?? 0) +
          (stats.num_add_metric ?? 0) * 10 +
          (stats.num_update_avatar ? 50 : 0)

        setUserPoints(points)
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

        <CmdKDialog />

        <div className="flex pr-6 gap-3">
          <Notifications />
          <UserAvatar />
          <div className="flex items-center justify-center">
            <span>{userPoints ?? '0'} Points</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
