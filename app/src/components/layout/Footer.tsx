import { Github } from 'lucide-react'

const SOCIAL = [
  {
    name: 'GitHub',
    href: 'https://github.com/alaister/metrics.haus',
    icon: <Github className="h-5 w-5" aria-hidden="true" />,
  },
]

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  return (
    <div className="bg-white border-t p-4 md:flex md:items-center md:justify-between dark:bg-gray-900">
      <div className="flex space-x-6 md:order-2">
        {SOCIAL.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-400"
          >
            <span className="sr-only">{item.name}</span>
            {item.icon}
          </a>
        ))}
      </div>
      <p className="flex items-center gap-1 mt-4 text-xs leading-5 text-gray-600 md:order-1 md:mt-0 dark:text-gray-10">
        <span>&copy; {CURRENT_YEAR} metrics.haus. Started in</span>
        <span className="text-xl">🇲🇰</span>
        <span>by</span>
        <span className="text-xl">🇦🇺🇩🇪🇲🇰🇸🇬</span>
      </p>
    </div>
  )
}

export default Footer
