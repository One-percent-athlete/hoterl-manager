'use client'
import FsLightbox from 'fslightbox-react'
import { useState } from 'react'

export default function HomeGallery() {
  const [toggler, setToggler] = useState(false)
  return (
    <section className="container mt-5">
      <FsLightbox
        toggler={toggler}
        sources={[
          'banners/banner1.jpg',
          'banners/banner2.jpg',
          'banners/banner3.jpg',
          'banners/banner4.jpg',
          'banners/banner5.jpg',
        ]}
      />
      <h3 className="mt-5 mb-5 text-center">
        Gallery
        <button
          onClick={() => setToggler(!toggler)}
          className="float-end fs-5 btn text-white hms-bg-dark">
          View All
        </button>
      </h3>
      <div className="row text-center">
        <div class="row mx-auto">
          <div class="col-4 mb-4">
            <div class="card h-100" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
              <img src="banners/banner3.jpg" className="img-thumbnail" />
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="card h-100" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
              <img src="banners/banner5.jpg" className="img-thumbnail" />
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="card h-100" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
              <img src="banners/banner4.jpg" className="img-thumbnail" />
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="card h-100" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
              <img src="banners/banner2.jpg" className="img-thumbnail" />
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="card h-100" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
              <img src="banners/banner3.jpg" className="img-thumbnail" />
            </div>
          </div>
          <div class="col-4 mb-4">
            <div class="card h-100" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
              <img src="banners/banner1.jpg" className="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
