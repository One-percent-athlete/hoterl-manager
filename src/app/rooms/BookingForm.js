"use client"
import Link from 'next/link'

export default function BookingForm({roomDetails}) {
  var user = localStorage.getItem("user")
  user = JSON.parse(user)
  var bookingUrl= window.location.pathname
  if (user!=null){
      return (
        <div className="card">
        <h5 className="card-header">Booking Form</h5>
        <div className="card-body">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            <b>Room Type:</b>　{roomDetails.title}
            </label>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            <b>Cost:</b>　$ {roomDetails.price_per_night} / night
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
      )
  }else {
    return (
        <Link href={`/user/login/?redirect=${bookingUrl}`}>Login To Proceed</Link>
    )
  }
}

