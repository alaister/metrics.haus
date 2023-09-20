import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import TeamSelector from '../teams/TeamSelector'
import { UserAvatar } from '../UserAvatar'
import { Button } from '../ui/Button'

const Header = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userStats, setUserStats] = useState<{
    num_data_points_created?: number
  }>({})
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
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

export default Header
