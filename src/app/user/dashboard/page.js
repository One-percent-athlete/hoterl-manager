import Link from 'next/link'
import BarChart from '@/components/user/Chart'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="list-group">
            <a className="list-group-item hms-bg-dark" href="#">
              Dashboard
            </a>
            <a className="list-group-item" href="#">
              Booking History
            </a>
            <a className="list-group-item" href="#">
              Payment Log
            </a>
            <a className="list-group-item" href="#">
              Profile
            </a>
            <a className="list-group-item text-danger" href="#">
              Logout
            </a>
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Total Bookings</h4>
                  <hr></hr>
                  <div className="card-body">
                    <h5>
                      <a href="#">23</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Total Payments</h4>
                  <hr></hr>
                  <div className="card-body">
                    <h5>
                      <a href="#">$ 25000</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-12" id="paymentChart">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
