import { Link } from '@tanstack/react-router'
import ConfettiExplosion from 'react-confetti-explosion'
import { useAppSelector } from '~/stores'
import { UserAvatar } from '../UserAvatar'
import { CmdKDialog } from '../cmdk/CmdKDialog'
import { Notifications } from '../notifications'
import TeamSelector from '../teams/TeamSelector'
import { Suspense } from 'react'

const Header = () => {
  const points = useAppSelector((state) => state.points.points)
  const isExploding = useAppSelector((state) => state.points.confetti)

  return (
    <header className="sticky top-0 border-b bg-white z-10">
      <div className="flex h-16 justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-medium">
            <Link to="/">metrics.haus</Link>
          </h1>
          <Suspense>
            <TeamSelector />
          </Suspense>
        </div>

        <CmdKDialog />

        <div className="flex pr-6 gap-3">
          <Notifications />
          <UserAvatar />
          <div className="flex items-center justify-center">
            {isExploding && (
              <ConfettiExplosion
                force={0.4}
                duration={1900}
                particleCount={30}
                width={400}
                zIndex={1000}
              />
            )}
            <span>{points ?? '0'} Points</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
