import Link from 'next/link'

const Footer = () => {
  const categories = [
    { name: 'World', href: '/world' },
    { name: 'Politics', href: '/politics' },
    { name: 'Business', href: '/business' },
    { name: 'Health', href: '/health' },
    { name: 'Entertainment', href: '/entertainment' },
    { name: 'Style', href: '/style' },
    { name: 'Travel', href: '/travel' },
    { name: 'Sports', href: '/sports' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CNN Clone</h3>
            <p className="text-gray-400">
              Your trusted source for breaking news, analysis, exclusive interviews, 
              headlines, and videos.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link 
                    href={category.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="block text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="block text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="block text-gray-400 hover:text-white">YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CNN Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 