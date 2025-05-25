import FeaturedNews from '../components/FeaturedNews'
import CategorySection from '../components/CategorySection'
import LatestNews from '../components/LatestNews'
import WhatsAppChat from '../components/WhatsAppChat'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FeaturedNews />
      <div className="flex justify-center my-8">
        <WhatsAppChat />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <CategorySection 
            title="Top Stories" 
            category="top-stories" 
          />
          <CategorySection 
            title="World" 
            category="world" 
          />
          <CategorySection 
            title="Politics" 
            category="politics" 
          />
        </div>
        
        <div className="lg:col-span-1">
          <LatestNews />
        </div>
      </div>
    </div>
  )
}