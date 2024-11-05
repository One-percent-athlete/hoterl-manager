import Link from 'next/link'
import RoomImages from '@/components/RoomDetailImages'
import BookingForm from "../BookingForm"

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
          <RoomImages images={roomDetails.room_type_image} />
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
         <BookingForm roomDetails={roomDetails}/>
        </div>
      </div>
    </section>
  )
}
