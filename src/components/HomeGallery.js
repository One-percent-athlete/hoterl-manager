

export default function HomeGallery() {
    return (
      <section className="container mt-5">
          <h3 className="mt-5 mb-5 text-center">Gallery</h3>
              <div className="row text-center">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner3.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner5.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner4.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner2.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner3.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
                    <img src="banners/banner1.jpg" className="img-thumbnail"/>
                    </div>
                </div>
                </div>
              </div>
      </section>

      
    );
  }
  