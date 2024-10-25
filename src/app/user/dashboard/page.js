import Link from 'next/link'
import BarChart from '@/components/user/Chart'
import DashboardSidebar from '@/components/user/DashboardSidebar'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Total Bookings</h4>
                  <hr></hr>
                  <h5>
                    <Link href="/user/room_history">23</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Total Payments</h4>
                  <hr></hr>
                  <h5>
                    <Link href="#">$ 25000</Link>
                  </h5>
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
