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
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Booking Date</th>
                  <th>Details</th>
                  <th>Invoice</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11/02/2024</td>
                  <td>
                    <p className="m-0">Num of Rooms: 2</p>
                    <p className="m-0">Days of Stay: 3</p>
                    <p className="m-0">Num of Guests: 2</p>
                  </td>
                  <td>
                    <p className="m-0">
                      <Link href="#">Invoice</Link>
                    </p>
                    <p className="m-0">Total Cost: 15,000</p>
                    <p className="m-0 text-danger">Due</p>
                  </td>
                  <td>
                    <p className="m-1">
                      <Link href="#" className="btn btn-outline-success m-0 p-1">
                        Approve
                      </Link>
                      <Link href="#" className="btn btn-outline-danger ms-1 p-1">
                        Cancel
                      </Link>
                    </p>
                    <p className="m-1 p-0">
                      <Link href="#" className="btn btn-outline-secondary m-0 p-1 px-3">
                        Guest Details
                      </Link>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
