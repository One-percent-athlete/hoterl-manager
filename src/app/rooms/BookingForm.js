"use client"
import { useEffect, useState, useRef } from "react"
import Link from 'next/link'

export default function BookingForm({roomDetails}) {

    const [totalCost, setTotalCost] = useState(0)
    const [totalGuest, setTotalGuest] = useState(1)
    const [numOfRooms, setNumOfRooms] = useState(1)
    const [checkinDate, setCheckinDate] = useState("")
    const [checkoutDate, setCheckoutDate] = useState("")
    const [checkinDateNormal, setCheckinDateNormal] = useState("")
    const [checkoutDateNormal, setCheckoutDateNormal] = useState("")
    const [details, setDetails] = useState("")

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
    function numOfRoomsHandler(e) {
        const _numOfRooms=e.target.value
        setNumOfRooms(_numOfRooms)
    }

    function detailsHandler(e) {
        const _detail=e.target.value
        setDetails(_detail)
    }

    useEffect(() => {
        const totalDays=Math.ceil(checkoutDate-checkinDate)/(1000*60*60*24)
        var _totalCost=totalDays*roomDetails.price_per_night*numOfRooms
        console.log(totalGuest, checkinDate, checkoutDate, _totalCost);
        setTotalCost(_totalCost)
    },[checkinDateNormal, checkoutDateNormal])

    const resestRefButton = useRef(null)
    const [errorMsg, setErrorMsg] = useState("")


    
  var user = localStorage.getItem("user")
  user = JSON.parse(user)


  async function handleForm(formData){
    const fd = {
      'room_number' : formData.get('total_rooms'),
      'user' : user,
      'booking_date' : "",
      'total_guest' : formData.get('total_guest'),
      'checkin_date' : formData.get('checkin_date'),
      'checkout_date' : formData.get('checkout_date'),
      'price' : formData.get('total_price'),
      'booking_details' : formData.get('details'),
    }
    
    const res = await fetch("http://127.0.0.1:8000/api/room_booking", {"method": "POST", "body": JSON.stringify(fd), "headers": {
      "Content-Type":"application/json"
    }
  })
  const resData = await res.json()
  
  if (res.ok){
    setSuccessMsg(true)
    setErrorMsg("")
    resestRefButton.current.click()
  } else {
    var errorStr=[];
    for(const [key, values] of Object.entries(resData)){  
      console.log(values[key]);
         for(let i=0; i<values.length; i++) {
             errorStr.push(`${values[i]}`)
         }
    }
    setSuccessMsg(false)
    setErrorMsg(errorStr)
  }
  }

    
  var bookingUrl= window.location.pathname
  if (user!=null){
      return (
        
        <div className="card">
            {
            errorMsg && <div className="alert alert-warning">{ errorMsg }</div>
            }
        <h5 className="card-header">Booking Form</h5>
        <form action={handleForm}>
            <div className="card-body">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Room Type:</b>　{roomDetails.title}
                </label>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Cost:</b>　$ {roomDetails.price_per_night} /night
                </label>
            </div>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Number of Rooms</b>
                </label>
                <input type="number" className="form-control" name="total_rooms" onChange={numOfRoomsHandler} value={numOfRooms}/>
            </div>
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
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                <b>Details</b>
                </label>
                <textarea className="form-control" name="details" onChange={detailsHandler} value={details} />
            </div>
            <hr/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" name="total_price">
                <b>Total Charge:</b>　$ {totalCost}
                </label>
            </div>

            <Link href="/rooms/?page=1" className="btn btn-secondary me-2" type="button">
                Go Back
            </Link>
            <button className="btn btn-danger me-2" ref={resestRefButton}>Reset</button>
            <Link href="/payment" className="btn hms-bg-dark" type="button">
                Submit
            </Link>
            </div>
        </form>
        </div>
      )
  }else {
    return (
        <Link href={`/user/login/?redirect=${bookingUrl}`}>Login To Proceed</Link>
    )
  }
}

