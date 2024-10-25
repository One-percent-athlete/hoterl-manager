import Link from 'next/link'

export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Rooms (6)</h3>
      <div className="row text-center">
        <div className="col-4 mb-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="/rooms/" className="text-white">
              <img src="banners/banner2.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms/single" className="text-white">
                  Single
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="/rooms/" className="text-white">
              <img src="banners/banner3.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms/double" className="text-white">
                  Double
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="/rooms/" className="text-white">
              <img src="banners/banner1.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms/twin" className="text-white">
                  Twin
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="/rooms/" className="text-white">
              <img src="banners/banner3.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms/delux" className="text-white">
                  Delux
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="/rooms/" className="text-white">
              <img src="banners/banner1.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms/queen" className="text-white">
                  Queen
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="/rooms/" className="text-white">
              <img src="banners/banner2.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms/king" className="text-white">
                  King
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
