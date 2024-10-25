import Link from 'next/link'

export default function HomeServices() {
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Services</h3>
      <div className="row text-center">
        <div className="col-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <Link href="room-types" className="text-white">
              <img src="banners/banner3.jpg" className="img-thumbnail" />
            </Link>
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">
                <Link href="/rooms" className="text-white">
                  Rooms
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <img src="banners/banner2.jpg" className="img-thumbnail" />
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">Events</h5>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
            <img src="banners/banner1.jpg" className="img-thumbnail" />
            <div className="card-body hms-bg-dark text-white">
              <h5 className="card-title">Booking</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
