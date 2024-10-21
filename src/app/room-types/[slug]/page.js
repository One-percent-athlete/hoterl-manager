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
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
