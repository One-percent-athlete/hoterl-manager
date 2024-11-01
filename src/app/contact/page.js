import Link from 'next/link'
import RoomImages from '@/components/RoomDetailImages'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="col-10 offset-1">
        <h3 className="my-5">Contact</h3>
        <div className="row">
          <div className="col-md-6 col-12">
            <img src="/banners/banner3.jpg" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <div className="col-md-12 col-12 mb-3">
              <label className="form-label" aria-required>
                Your Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-12 col-12 mb-3">
              <label className="form-label" aria-required>
                Email
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-12 col-12 mb-3">
              <label className="form-label">Mobile</label>
              <input type="number" className="form-control" />
            </div>
            <div className="col-md-12 col-12 mb-3">
              <label className="form-label">Message</label>
              <textarea type="text" className="form-control" />
            </div>
            <div className="col-md-12 col-12 mb-3">
              <label className="form-label">Captcha Code</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <Link href="/" className="btn btn-secondary">
                Back To Home
              </Link>
              <button className="btn hms-bg-dark ms-2">Send</button>
            </div>
            <p>
              <Link href="/career">Work With Us? </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
