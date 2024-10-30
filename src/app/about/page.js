import Link from 'next/link'
import RoomImages from '@/components/RoomDetails'

export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-5">About</h3>
      <div className="row">
        <div className="col-5">
          <img src="/banners/banner3.jpg" className="img-fluid" />
        </div>
        <div className="col-7"></div>
      </div>
    </section>
  )
}
