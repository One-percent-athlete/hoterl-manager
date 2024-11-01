import Link from 'next/link'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner4.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <h3 className="mb-3">Forgot Password</h3>
              <div className="row">
                <div className="col-12 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn hms-bg-dark">Send Link</button>
                </div>
                <p>
                  Not a user yet? <Link href="/user/signup">Sign up</Link>
                </p>
                <p>
                  Return to login? <Link href="/user/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
