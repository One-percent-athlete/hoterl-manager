'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useState, useEffect } from 'react'

export default function RoomImages() {
  const [imageList, setImageList] = useState([])
  async function fetchData() {
    const banners = await fetch('http://127.0.0.1:8000/api/banners')
    const res = await banners.json()
    setImageList(res.results)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Carousel showThumbs={false}>
      {imageList.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </Carousel>
  )
}
