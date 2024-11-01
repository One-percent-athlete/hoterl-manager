'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useState, useEffect } from 'react'

export default function RoomImages({images}) {
  return (
    <Carousel showThumbs={false}>
      {images.map((item, index) => (
        <div key={index}>
          <img src={item.image} />
        </div>
      ))}
    </Carousel>
  )
}
