import Link from 'next/link'
import RoomTypeCard from '@/components/RoomTypeCard'

async function getData(page_num) {
  const res = await fetch('http://127.0.0.1:8000/api/room_types?page=' + page_num, {
    cache: 'no-store',
  })
  const data = await res.json()
  return data
}

export default async function Page({ searchParams }) {
  const page = searchParams.page
  const roomTypes = await getData(page)
  const links = []
  for (let i = 1; i <= roomTypes.count; i++) {
    links.push(
      <Link
        className="text-decoration-none text-white page-link hms-bg-dark"
        href={`/rooms/?page=${i}`}>
        {i}
      </Link>
    )
  }

  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Rooms (6)</h3>
      <div className="row text-center">
        {roomTypes.results.map((item, index) => (
          <RoomTypeCard item={item} />
        ))}
      </div>
      <nav className="">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link hms-bg-dark" href="#">
              Previous
            </a>
          </li>
          {links.map((item, index) => (
            <li className="page-item">{item}</li>
          ))}
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
