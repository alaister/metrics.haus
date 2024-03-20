import { Suspense } from 'react'
import { Link } from '~/lib/router'
import { UserAvatar } from '../UserAvatar'
import TeamSelector from '../teams/TeamSelector'

const Header = () => {
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

        <div className="flex gap-3">
          {/* <Notifications /> */}
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

export default Header
