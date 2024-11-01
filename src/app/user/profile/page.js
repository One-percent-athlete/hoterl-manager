import Link from 'next/link'
import DashboardSidebar from '@/components/user/DashboardSidebar'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>
        <div className="col-md-8 col-12">
          <div className="card">
            <h3 className="card-header py-2">Update Profile</h3>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 mb-3">
                  <img src="/banners/user.jpg" width={500} className="img-fluid" />
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-5 col-12 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label" aria-required>
                    Email
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn btn-secondary">Reset</button>
                  <button className="btn hms-bg-dark ms-2">Update</button>
                </div>
                <p>
                  <Link className="btn btn-danger" href="/user/changepassword">
                    Change Password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
