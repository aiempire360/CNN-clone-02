import Image from 'next/image'
import Link from 'next/link'

interface CategorySectionProps {
  title: string
  category: string
}

const CategorySection = ({ title, category }: CategorySectionProps) => {
  // This would typically fetch from an API
  const articles = [
    {
      id: 1,
      title: 'Sample Article 1',
      excerpt: 'This is a brief excerpt of the article content...',
      image: '/images/article-1.jpg',
      slug: 'sample-article-1'
    },
    {
      id: 2,
      title: 'Sample Article 2',
      excerpt: 'Another brief excerpt of article content...',
      image: '/images/article-2.jpg',
      slug: 'sample-article-2'
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-red-600">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/article/${article.slug}`} className="hover:text-red-600">
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
      <Link 
        href={`/category/${category}`}
        className="inline-block mt-6 text-red-600 hover:text-red-700"
      >
        View all {title} →
      </Link>
    </section>
  )
}

export default CategorySection 