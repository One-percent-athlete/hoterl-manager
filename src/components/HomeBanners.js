'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default function HomeBanners() {
  return (
    <Carousel>
      <div>
        <img src="banners/banner1.jpg" />
      </div>
      <div>
        <img src="banners/banner2.jpg" />
      </div>
      <div>
        <img src="banners/banner3.jpg" />
      </div>
      <div>
        <img src="banners/banner4.jpg" />
      </div>
      <div>
        <img src="banners/banner5.jpg" />
      </div>
    </Carousel>
  )
}
