import Link from 'next/link'
import RoomTypeCard from '@/components/RoomTypeCard'

async function getData(page_num) {
  const res = await fetch('http://127.0.0.1:8000/api/room_types?page=' + page_num, {cache:"no-store"})
  const data = await res.json()
  return data
}
export default async function Page({searchParams}) {
  const page =  (await searchParams).page
  const roomTypes = await getData(page)

  const links = []
  if(roomTypes.previous) {
    links.push(
      <Link
        className="text-decoration-none page-link text-white hms-bg-dark"
        href={`/rooms/?page=${page - 1}`}>
        Previous
      </Link>
    )
  }
  for (let i = 1; i <= roomTypes.count / 2 ; i++) {
    if (page == i) {
      links.push(
        <Link
          className="text-decoration-none page-link text-dark"
          href={`/rooms/?page=${i}`}>
          {i}
        </Link>
      )
    } else {
      links.push(
        <Link
          className="text-decoration-none page-link text-white hms-bg-dark"
          href={`/rooms/?page=${i}`}>
          {i}
        </Link>
      )
    }
  }

  if(roomTypes.next) {
    links.push(
      <Link
        className="text-decoration-none page-link text-white hms-bg-dark"
        href={`/rooms/?page=${parseInt(page) + 1}`}>
        Next
      </Link>
    )
  }
 
  return (
    <section className="container my-5">
      <h3 className="my-5 text-center">Rooms ({roomTypes.count})</h3>
      <div className="row text-center">
        {roomTypes.results.map((item, index) => (
          <RoomTypeCard item={item} key={index} />
        ))}
      </div>
      <nav className="">
        <ul className="pagination">
          {links.map((item, index) => (
            <li className="page-item">{item}</li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
