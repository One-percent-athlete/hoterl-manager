import Link from 'next/link'
import RoomTypeImages from '@/components/RoomTypeImages'

export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Room Details</h3>
      <div className="row">
        <div className="col-5">
          <RoomTypeImages />
          <h4 className="my-5">Amenities</h4>
          <div className="col-5">
            <p>
              <i className="fa fa-check-circle text-success"></i> Free wifi
            </p>
            <p>
              <i className="fa fa-check-circle text-success"></i> Welcome drink
            </p>
            <p>
              <i className="fa fa-check-circle text-success"></i> Drinking water
            </p>
          </div>
          <h4 className="my-5">Location</h4>
          <div className="col-5">
            <p>123, Dummy street, Dummy Address</p>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <h5 className="card-header">Booking Form</h5>
            <div className="card-body">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Room Type:</b>　Single
                </label>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Cost:</b>　$ 300 / night
                </label>
              </div>
              <hr />
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Total Guest</b>
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Check In</b>
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  <b>Check Out</b>
                </label>
                <input type="date" className="form-control" />
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
