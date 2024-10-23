import Link from 'next/link'

export default function PaymentSuccess() {
  return (
    <div>
      <h3 className="text-success my-5">
        <i className="fa fa-check-circle"></i>
        Thank you for choosing us.
      </h3>
      <h5>
        Invoice: <Link href="#">Click To View</Link>
      </h5>
      <p className="my-4">
        <Link href="#" className="btn btn-outline-info ">
          Home
        </Link>
        <Link href="#" className="btn btn-info ms-2">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
