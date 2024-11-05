"use client"
import { useEffect, useState } from "react"
import Link from 'next/link'

export default function BookingForm({roomDetails}) {

    const [totalCost, setTotalCost] = useState(0)
    const [totalGuest, setTotalGuest] = useState(1)
    const [checkinDate, setCheckinDate] = useState("")
    const [checkoutDate, setCheckoutDate] = useState("")

    const [checkinDateNormal, setCheckinDateNormal] = useState("")
    const [checkoutDateNormal, setCheckoutDateNormal] = useState("")

    function checkoutDateHandler(e) {
        const _date=e.target.value
        var _dateObj=new Date(e.target.value)
        setCheckoutDate(_dateObj)
        setCheckoutDateNormal(_date)
    }

    function checkinDateHandler(e) {
        const _date=e.target.value
        var _dateObj=new Date(_date)
        setCheckinDate(_dateObj)
        setCheckinDateNormal(_date)
    }

    function guestHandler(e) {
        const _guest=e.target.value
        setTotalGuest(_guest)
    }

    useEffect(() => {
        const totalDays=Math.ceil(checkoutDate-checkinDate)/(1000*60*60*24)
        var _totalCost=totalDays*roomDetails.price_per_night*totalGuest
        console.log(totalGuest, checkinDate, checkoutDate, _totalCost);
        setTotalCost(_totalCost)
    },[checkinDateNormal, checkoutDateNormal])


    
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
            <b>Cost:</b>　$ {roomDetails.price_per_night} /person /night
            </label>
        </div>
        <hr />
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            <b>Total Guest</b>
            </label>
            <input type="number" className="form-control" name="total_guest" onChange={guestHandler} value={totalGuest}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            <b>Check In</b>
            </label>
            <input type="date" className="form-control" name="checkin_date" onChange={checkinDateHandler} value={checkinDateNormal} />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            <b>Check Out</b>
            </label>
            <input type="date" className="form-control" name="checkout_date" onChange={checkoutDateHandler} value={checkoutDateNormal} />
        </div>
        <hr/>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            <b>Total Charge:</b>　$ {totalCost}
            </label>
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

