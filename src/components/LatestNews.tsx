import Link from 'next/link'

const LatestNews = () => {
  // This would typically fetch from an API
  const latestNews = [
    {
      id: 1,
      title: 'Breaking News Story 1',
      time: '2 hours ago',
      category: 'World'
    },
    {
      id: 2,
      title: 'Important Update on Global Markets',
      time: '3 hours ago',
      category: 'Business'
    },
    {
      id: 3,
      title: 'New Scientific Discovery Announced',
      time: '4 hours ago',
      category: 'Science'
    },
    {
      id: 4,
      title: 'Sports Championship Results',
      time: '5 hours ago',
      category: 'Sports'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-red-600">
        Latest News
      </h2>
      <div className="space-y-4">
        {latestNews.map((news) => (
          <article key={news.id} className="pb-4 border-b last:border-b-0">
            <Link href={`/article/${news.id}`} className="block hover:bg-gray-50 p-2 -mx-2 rounded">
              <span className="text-red-600 text-sm font-medium">{news.category}</span>
              <h3 className="text-gray-900 font-medium mt-1">{news.title}</h3>
              <span className="text-gray-500 text-sm">{news.time}</span>
            </Link>
          </article>
        ))}
      </div>
      <Link 
        href="/latest"
        className="inline-block mt-6 text-red-600 hover:text-red-700"
      >
        View all latest news →
      </Link>
    </div>
  )
}

export default LatestNews 