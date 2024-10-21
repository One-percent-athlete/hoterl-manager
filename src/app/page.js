import HomeBanners from '@/components/HomeBanners'
import HomeGallery from '@/components/HomeGallery'
import HomeReviews from '@/components/HomeReviews'
import HomeServices from '@/components/HomeServices'

export default function Home() {
  return (
    <div>
      <HomeBanners />
      <HomeServices />
      <HomeGallery />
      <HomeReviews />
    </div>
  )
}
