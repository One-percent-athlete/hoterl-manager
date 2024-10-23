import Link from 'next/link'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="list-group">
            <a className="list-group-item" href="#">
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
      </div>
    </section>
  )
}
