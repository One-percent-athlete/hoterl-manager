import Link from 'next/link'
import RoomImages from '@/components/RoomBanners'

async function getData(uuid) {
  const res = await fetch('http://127.0.0.1:8000/api/room_types/' + uuid, {cache: "no-store"})
  const data = await res.json()
  return data
}
export default async function Page({params}) {
  const uuid = params.slug
  const roomDetails = await getData(uuid)
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">{roomDetails.title} Room</h3>
      <div className="row">
        <div className="col-5">
          <RoomImages />
          <h4 className="my-5">Amenities</h4>
          <div className="col-5">
            <p> 
              <i className="fa fa-check-circle text-success"></i>&ensp;{roomDetails.details[1]}
            </p>
            <p>
              <i className="fa fa-check-circle text-success"></i>&ensp;{roomDetails.details[2]}
            </p>
            <p>
              <i className="fa fa-check-circle text-success"></i>&ensp;{roomDetails.details[3]}
            </p>
          </div>
          <h4 className="my-5">Location</h4>
          <div className="col-5">
            <p>{roomDetails.details[0]}</p>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <h5 className="card-header">Booking Form</h5>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  <b>Room Type:</b>　Single
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  <b>Cost:</b>　$ 300 / night
                </label>
              </div>
              <hr />
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  <b>Total Guest</b>
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  <b>Check In</b>
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  <b>Check Out</b>
                </label>
                <input type="date" className="form-control" />
              </div>
              <Link href="/rooms/?page=1" className="btn btn-secondary me-2" type="button">
                Back To Room Types
              </Link>
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
