import Link from 'next/link'
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bars3Icon className="h-6 w-6 mr-4 cursor-pointer lg:hidden" />
            <Link href="/" className="text-2xl font-bold text-red-600">
              CNN Clone
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            <Link href="/world" className="text-gray-700 hover:text-red-600">
              World
            </Link>
            <Link href="/politics" className="text-gray-700 hover:text-red-600">
              Politics
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-red-600">
              Business
            </Link>
            <Link href="/health" className="text-gray-700 hover:text-red-600">
              Health
            </Link>
          </nav>

          <div className="flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 