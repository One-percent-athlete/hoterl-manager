import Link from 'next/link'
import RoomImages from '@/components/RoomDetails'

export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Book Events</h3>
      <div className="row">
        <div className="col-5">
          <RoomImages />
        </div>
        <div className="col-7">
          <div className="card">
            <h5 className="card-header">Booking Form</h5>
            <div className="card-body">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Event Type</b>
                </label>
                <select className="form-control" placeholder="--Select--">
                  <option>Birthday Party</option>
                  <option>Wedding Party</option>
                  <option>Celebration</option>
                  <option>Farewell Party</option>
                  <option>Seminar</option>
                  <option>Conference</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Event Details</b>
                </label>
                <textarea type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Total Guest</b>
                </label>
                <input type="number" className="form-control" placeholder="1" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Starting Date</b>
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Ending Date</b>
                </label>
                <input type="date" className="form-control" />
              </div>
              <hr />
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <h5>Total Cost: $ 300 / night</h5>
                </label>
              </div>
              <Link href="/payment" className="btn hms-bg-dark" type="button">
                Confirm Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
