import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '~/components/ui/Button'
import { ThemeButton } from '~/components/ui/ThemeButton'
import { toast } from '~/lib/hooks/use-toast'
import supabase from '~/lib/supabase'
import TeamSelector from '../teams/TeamSelector'

const Header = () => {
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
    <header className="sticky top-0 border-b bg-white z-10">
      <div className="flex h-16 justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-medium">
            <Link to="/">metrics.haus</Link>
          </h1>

          <TeamSelector />
        </div>

        <ThemeButton />

        <Button
          variant="ghost"
          onClick={signOut}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Sign Out
        </Button>
      </div>
    </header>
  )
}

export default Header
