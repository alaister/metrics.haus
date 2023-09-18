import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="sticky top-0 border-b bg-white">
      <div className="flex h-16 justify-between items-center px-4">
        <h1 className="font-medium">
          <Link to="/">metrics.haus</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
