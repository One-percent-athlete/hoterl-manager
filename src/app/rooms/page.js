import Link from 'next/link'
import RoomTypeCard from '@/components/RoomTypeCard'

export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Rooms (6)</h3>
      <div className="row text-center">
        <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard />
        <RoomTypeCard />
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
