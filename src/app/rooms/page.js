import Link from 'next/link'
import RoomTypeCard from '@/components/RoomTypeCard'

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/room_types')
  const data = await res.json()
  return data
}

export default async function Page() {
  const roomTypes = await getData()
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Rooms (6)</h3>
      <div className="row text-center">
        {roomTypes.map((item, index) => (
          <RoomTypeCard item={item} key={index} />
        ))}
      </div>
      <nav className="">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link hms-bg-dark" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link hms-bg-dark" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link hms-bg-dark" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link hms-bg-dark" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link hms-bg-dark" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
