import Link from 'next/link'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/2.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <h3 className="mb-3">Signup</h3>
              <div class="row">
                <div class="col-md-6 col-12 mb-3">
                  <label className="form-labrl">First Name</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label className="form-labrl">Last Name</label>
                  <input type="text" class="form-control" />
                </div>

                <div class="col-md-6 col-12 mb-3">
                  <label className="form-labrl">Username</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label className="form-labrl">Email</label>
                  <input type="email" class="form-control" />
                </div>
                <div class="col-12 mb-3">
                  <label className="form-labrl">Password</label>
                  <input type="password" class="form-control" />
                </div>
                <div class="col-12 mb-3">
                  <label className="form-labrl">Confirm Password</label>
                  <input type="password" class="form-control" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn btn-secondary">Reset</button>
                  <button className="btn hms-bg-dark ms-2">Submit</button>
                </div>
                <p>
                  Already a user? <Link href="/user/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
