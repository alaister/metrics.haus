import { Link } from 'react-router-dom'
import TeamSelector from '../teams/TeamSelector'
import { Notifications } from '../notifications'
import { UserAvatar } from '../UserAvatar'

const Header = () => {
  return (
    <header className="sticky top-0 border-b bg-white z-10">
      <div className="flex h-16 justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <h1 className="font-medium">
            <Link to="/">metrics.haus</Link>
          </h1>

          <TeamSelector />
        </div>
        <div className="flex pr-6 gap-3">
          <Notifications />
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

export default Header
