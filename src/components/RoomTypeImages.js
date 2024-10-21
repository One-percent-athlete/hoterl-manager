'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default function RoomTypeImages() {
  return (
    <Carousel>
      <div>
        <img src="/banners/banner1.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/banners/banner2.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/banners/banner3.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="/banners/banner4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="/banners/banner5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
    </Carousel>
  )
}
