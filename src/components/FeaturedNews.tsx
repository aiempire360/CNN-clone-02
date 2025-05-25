import Image from 'next/image'
import Link from 'next/link'

const FeaturedNews = () => {
  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden">
      <Image
        src="/images/featured-placeholder.jpg"
        alt="Featured news"
        fill
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <div className="max-w-3xl">
          <span className="text-red-500 font-semibold mb-2 inline-block">Breaking News</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Major World Event Unfolds as Global Leaders Respond
          </h1>
          <p className="text-gray-200 text-lg mb-4">
            Latest developments in the ongoing situation with international implications...
          </p>
          <Link 
            href="/article/featured-story" 
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedNews 